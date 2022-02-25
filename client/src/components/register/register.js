import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import './register.scss';

export default function Register(props) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [usernameRegister, setUsernameRegister] = useState('')
  const [emailRegister, setEmailRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      url: 'http://localhost:3002/users/register',
      method: 'POST',
      data: {
        username: usernameRegister, password: passwordRegister, email: emailRegister
      },
    };
    axios(config)
      .then((resp) => {
        setIsSubmitted(true);
      })
      .catch(function (error) {
        console.log("Error: ", error);
        setErrorMessages({ name: "Registration failed", message: "Somethig happend..." });
      });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required onChange={event => setUsernameRegister(event.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required onChange={event => setEmailRegister(event.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={event => setPasswordRegister(event.target.value)} />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <Header />
      <div className="login-form">
        <div className="title">Sign up</div>
        {isSubmitted ?
          <div id="sucessMessage">
            <div>
              User has successfully signed up!
            </div>
            <Link id="loginButton" centered to="/login">Log in</Link>
        </div> : renderForm}
      </div>
      <Footer />
    </div>
  );
}
