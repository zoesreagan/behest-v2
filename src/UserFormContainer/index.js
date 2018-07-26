import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="twelve columns">

            <Navbar id="nav" color="light" light expand="md">
              <NavbarBrand href="/">Home</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" pills>
                  <NavItem>
                    <Button color="primary">Begin New Form</Button>
                  </NavItem>
                  <NavItem>
                    <Button color="secondary">Learn More</Button>
                  </NavItem>
                  <NavItem>
                    <Button color="warning">Logout</Button>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>


            <p className="App-intro">
            Welcome to Behest: Advanced Directives for Dementia Related Conditions. <br /><br />
            People with advancing dementia lose the ability to make decisions for themselves.<br />
            Their families need to make medical decisions for them.<br /><br />

            Giving family members guidance about what kind of care you'd want if you were to develop worsening dementia
            can ease the burden of their decision, making and make you feel more secure that you'll receive the care that you would want.<br /><br />
            Your guidance today will help the people taking care of you in the future.<br /></p>


            </div>
          </div>


      </div>
  )
}
}
