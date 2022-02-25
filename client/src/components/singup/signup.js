import React, { useState } from 'react';
//import { axiosClient } from '../../config/axios';

export default function Register(props) {
  //  * States and consts
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "None",
    trust: 0,
    permissions: []
  });
  const [password2, setPass2] = useState({value: '', style: '', error: false});
  const [loading, setLoading] = useState(false);
  const [regRslt, setRegRslt] = useState({ msg: 'unsubmitted' });

  const classes = useStyles();
  const theme = useTheme();

  //  * Component functions
  const handleChange = event => {
    if (event.target.name === 'password2') {
      if (event.target.value !== newUser.password) {
        setPass2({ value: event.target.value, style: 'wrong-pass', error: false });
        setRegRslt({ msg: 'unsubmitted' });
      } else {
        setPass2({ value: event.target.value, style: '', error: false });
      }
    } else {
      setNewUser({
        ...newUser,
        [event.target.name]: event.target.value
      });
    }
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true);
    // *  Create newUser
    console.log(password2.value === newUser.password, password2, newUser.password)
    if (newUser.username !== '' && newUser.role !== 'None' && newUser.trust !== '0' && newUser.permissions.length) {
      if (password2.value === newUser.password) {
        try {
          await axiosClient.post('api/v1/users/register', newUser, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
          });
          
          setRegRslt({ color: "primary", msg: 'Registration succeded!' });
          setNewUser({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            role: "None",
            trust: '0',
            permissions: []
          });
          setPass2({ value: '', style: '', error: false });
        } catch (error) {
          console.error(error)
          setRegRslt({ color: "error", msg: 'Registration failed!' });
        }
      } else {
        setPass2({ ...password2, error: true });
      }
    } else {
      setRegRslt({ color: "error", msg: 'Required values not filled!' });
    }
    setLoading(false);
  }

  const getStyles = (permit, permitName, theme) => {
    return {
      fontWeight:
      permitName.indexOf(permit) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  return (
      <Container className={classes.mainContainer} component="div" maxWidth="md" >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={newUser.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={newUser.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role-select"
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                    label="Role"
                  >
                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    {roles.map((rolePermit) => (
                      <MenuItem key={rolePermit} value={rolePermit}>
                        {rolePermit}
                      </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="trust-label">Trust</InputLabel>
                  <Select
                    labelId="trust-label"
                    id="trust-select"
                    name="trust"
                    value={newUser.trust}
                    onChange={handleChange}
                    label="trust"
                  >
                    <MenuItem value="0">
                      <em>None</em>
                    </MenuItem>
                    {trustLevels.map((trustLevel) => (
                      <MenuItem key={trustLevel} value={trustLevel}>
                        {trustLevel}
                      </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="permissions-label">Permissions</InputLabel>
                  <Select
                    labelId="permissions-label"
                    id="permissions"
                    multiple
                    name="permissions"
                    value={newUser.permissions}
                    onChange={handleChange}
                    input={<Input id="select-multiple-permissions" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {permissions.map((permit) => (
                      <MenuItem key={permit} value={permit} style={getStyles(permit, newUser.permissions, theme)}>
                        <Checkbox color="primary" checked={ newUser.permissions.indexOf(permit) > -1} />
                        <ListItemText primary={permit} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={newUser.password}
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  value={password2.value}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              {
                password2.error &&
                <Typography className={classes.regRslt} color="error">
                  Passwords do not match!
                </Typography>
              }
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              { regRslt.msg !== 'unsubmitted' &&
              <Typography className={classes.regRslt} color={regRslt.color}>
                {regRslt.msg}
              </Typography>
              }
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              <div className="d-flex">
                {
                  loading ?
                    <CircularProgress className={classes.loader} />
                    :
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                      >
                        Register
                    </Button>
                }
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Check existant users
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
  );
}