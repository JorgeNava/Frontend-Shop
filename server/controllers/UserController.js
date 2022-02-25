const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const userServices = require('../services/UserServices.js')

router.post('/register', (req, res, next) => {
    const { password } = req.body
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);

    userServices.register(req.body).then(
        () => res.send('success')
    ).catch(err => {
        console.log("ERROR: ",err)
        next(err)
    })
})

router.post('/login', (req, res, next) => {
    const USERNAME = req.body.username;
    const PASSWORD = req.body.password;
    userServices.login(USERNAME, PASSWORD)
        .then(user => {
            res.json(user)
        }
    ).catch(err => {
        console.log('ERROR: ',err);
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => {
        console.log("ERROR: ",err)
        next(err)
    })
})

router.get('/email:email', (req, res, next) => {
    userServices.getById(req.params.email).then(
        (user) => res.json(user)
    ).catch(err => {
        console.log("ERROR: ",err)
        next(err)
    })
})

module.exports = router;