import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Behest</h1>
        </header>

          <nav>
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Begin New Form</MenuItem>
                  <MenuItem eventKey={3.2}>Learn More</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem id="Logout" eventKey={1} href="#">
                  Logout
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>

        <p className="App-intro">
          Welcome to Behest: Advanced Directives for Dementia Related Conditions. <br /><br />
          People with advancing dementia lose the ability to make decisions for themselves.<br />
					Their families need to make medical decisions for them.<br /><br />

					Giving family members guidance about what kind of care you'd want if you were to develop worsening dementia
          can ease the burden of their decision, making and make you feel more secure that you'll receive the care that you would want.<br /><br />
          Your guidance today will help the people taking care of you in the future.<br />
        </p>
    </div>
    );
  }
}

export default App;
