import React, { Component } from 'react';
import usa from '../usa.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="HEADER">
        <div className="HEADER__CONTACT">
            <h1 className="HEADER__TITLE">AARON FAULKNER</h1>
            <p>Pittsburgh, PA  USA<br/>
            1 (724) 888-6456<br/>
            <a href="mailto:ajf412@gmail.com">ajf412@gmail.com</a>
            <br/>Full Stack Web Developer<br/>
            Software Engineer</p>
        </div>
        <img src={usa} className="HEADER__FLAG" alt="MURICA!" />
      </div>
    );
  }
}

export default Header;