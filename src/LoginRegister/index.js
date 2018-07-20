import React, {Component} from "react";
import {Button, Form, FormGroup, Col, FormControl, ControlLabel, Grid, Row} from 'react-bootstrap';



class LoginRegister extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div className="login-form">
        <Grid>
          <Row className="show-grid">
            <Col sm={12} md={12}>

              <h4>If you are a new user, please register below</h4>
              <Button className={this.state.registering ? "current" : null} className="button" >Create new user</Button><br /><br />

              <h4>Returning user? Log in here.</h4>
              <Button className={this.state.registering ? "current" : null} className="button" >Login</Button><br /><br />


                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Email
                    </Col>
                    <Col xs={12} md={8}>
                      <FormControl type="email" placeholder="Email" />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                      Password
                    </Col>
                    <Col xs={12} md={8}>
                      <FormControl type="password" placeholder="Password" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col xs={12} md={12}>
                      <Button type="submit">Sign in</Button>
                    </Col>
                  </FormGroup>
                </Form>

            </Col>
          </Row>
        </Grid>

    </div>

    )
  }
}

export default LoginRegister;
