import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="FOOTER">
        <div className="FOOTER__CONTACT">
            <p>AARON FAULKNER<br/>
            Pittsburgh, PA  USA<br/>
            1 (724) 888-6456<br/>
            <a href="mailto:ajf412@gmail.com">ajf412@gmail.com</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;