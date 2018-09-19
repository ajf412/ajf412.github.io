import React, { Component } from 'react';
import { } from 'reactstrap';
import './Body.css';

import CAROUSEL from './Carousel';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <div className="BODY__CAROUSEL">
            <CAROUSEL/>
        </div>
    );
  }
}


export default Example;