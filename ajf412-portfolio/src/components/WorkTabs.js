import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./WorkTabs.css";
import Calvary from '../images/CalvaryLogo.jpg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="WORKTABS">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Next Steps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Calvary Baptist
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Python Text Adventure
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="WORKTABS__TAB"><h4>Next Steps </h4><a href="https://labs-next-leaderboard.herokuapp.com/"> visit</a></div>
                <p>Next Steps is here to help you, help your students.  Once they've learned from the experts, it is time for them to head out into the real world.  To truly succeed, they'll need a little help.  This is what career services are for!  Now it's YOUR turn!  To help you in your endeavors, we've created Next Steps to help you track your students' career search.  Who are they looking at?  How many applications have they put out?  Who has their resume?  Have they followed up?  Huntr.co is a great place to start.  Have your students sign up there with your company's link, and get a quick snapshot of their work here on Next Steps.  We also support github!  Make sure your students stay active in their development, by continuing to use github.  Make sure they're creating, commiting, and pushing, by just glancing at a page.  This is a tool to make sure they're hitting each and every milestone.  This... is Next Steps.</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12">
                <div className="WORKTABS__TAB"><h4>Calvary Baptist</h4><a href="https:www.calvarymonaca.com">Old Site</a><a href="https://calvarymonaca.netlify.com/">WIP of rework</a></div>
                <img src={Calvary} alt="Calvary Logo"/>
                <p>Website rebuild for Calvary Baptist Church<br/>
                Started as a node site, but for billing simplicity, we decided to stay with HostGator as their host, and had to switch to a WordPress site.  This uses a theme, customized to fit their needs.</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
          <Row>
              <Col sm="12">
                <h4>Tutorials</h4>
                <p>A few introductory tutorials I made for Shade 3D software.</p>
                <div class="BODY__TUTORIALS">
                    <iframe width="300" height="auto" src="https://www.youtube.com/embed/q6_wWHkYUvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe width="300" height="auto" src="https://www.youtube.com/embed/91_04YQN6B8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe width="300" height="auto" src="https://www.youtube.com/embed/TFg79h9KBoc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
          <Row>
              <Col sm="12">
                <div className="WORKTABS__TAB"><h4>Python Text Adventure</h4><a href="https://repl.it/@ajf412/PythonADV">visit</a></div>
                <p>A small text adventure game.<br/>
                Built with Python, based on Python.<br/>
                This is hosted on repl.it<br/>
                This is a solo project.</p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}