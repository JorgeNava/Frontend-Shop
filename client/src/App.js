import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import './App.css';
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
