import React, {Component} from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css'


class LoginRegister extends Component{
  constructor(){
    super();
    this.state = {
      first_name: '',
      last_name: '',
			username: '',
			password: '',
			registering: false
    }
  }

  registration = () => {
  this.setState({
    registering: true
    })
  }

  login = () => {
    this.setState({
      registering: false
    })
  }

  handleInput = (e) => {
    const field = e.currentTarget.name
    if(field == 'first_name') this.setState({ first_name: e.currentTarget.value })
    else if(field == 'last_name') this.setState({ last_name: e.currentTarget.value })
    else if (field == 'username') this.setState({ username: e.currentTarget.value })
    else if(field == 'password') this.setState({ password: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.registering) this.props.register(this.state.first_name, this.state.last_name, this.state.username, this.state.password)
    else this.props.login(this.state.username, this.state.password)
  }

  render(){
    return(
      <div className="login-form">
          <Col sm={12} md={12}>

              <h6>If you are a new user, please register below</h6>
              <Button color="primary" className={this.state.registering ? "current" : null} className="button" >Create new user</Button><br /><br />

              <h6>Returning user? Log in here.</h6>
              <Button color="success" className={this.state.registering ? null : "current"} className="button" >Login</Button><br /><br />

          </Col>



				            {this.props.loginError != '' ? <p>{this.props.loginError}</p> : null}



    </div>

    )
  }
}

export default LoginRegister;
