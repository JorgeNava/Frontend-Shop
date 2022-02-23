import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import './App.css';
import "./styles.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      url: 'http://localhost:3002/users/login',
      method: 'POST',
      data: {
        username: usernameLogin, password: passwordLogin
      },
    };
    axios(config)
      .then((resp) => {
        setIsSubmitted(true);
      })
      .catch(function (error) {
        console.log("Error: ", error);
        setErrorMessages({ name: "pass", message: "Invalid credentials" });
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
          <input type="text" name="uname" required onChange={event => setUsernameLogin(event.target.value)} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={event => setPasswordLogin(event.target.value)} />
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
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
