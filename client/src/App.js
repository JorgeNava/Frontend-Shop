import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from "react-dom";


import Login from './components/login/login';
import Register from './components/register/register';
import Nav from './components/nav/nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path='/' element={< Login />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
