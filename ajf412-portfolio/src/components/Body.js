import React, { Component } from 'react';
import { } from 'reactstrap';
import './Body.css';

import CAROUSEL from './Carousel';
import WORKTABS from './WorkTabs';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="BODY">
        <div className="BODY__CAROUSEL">
            <CAROUSEL/>
        </div>
        <div className="BODY__WORKTABS">
          <WORKTABS/>
        </div>
      </div>
    );
  }
}


export default Example;