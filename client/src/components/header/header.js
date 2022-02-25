import React, { Component } from 'react';
import './header.scss';
import header from './header-template.js';

class Header extends Component {
  render() {
    return (
      <div>
        {header()}
      </div>
    );
  }
}

export default Header;