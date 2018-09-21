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
            Software Engineer<br/>
            <a href="https://docs.google.com/document/d/16n-dsnWKnn6TTotnJl75OPtpJ5AI84ZGZYnphdNM2_o/edit?usp=sharing">Resume</a></p>
        </div>
        <img src={usa} className="HEADER__FLAG" alt="MURICA!" />
      </div>
    );
  }
}

export default Header;