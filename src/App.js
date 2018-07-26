import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import UserFormContainer from './UserFormContainer';
import LoginRegister from './LoginRegister';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  };

  render() {
    return (
      <div className="App">

        <div id="App-container">
          <div className="container">

            <div className="row">
                <div className="twelve columns">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">Behest</h1>
                </div>
              </div>

              <div className="row">
                <div className="twelve columns">
                  {this.state.loggedIn ?
                    <UserFormContainer />

                    :
                    <LoginRegister />
                  }


                  <footer>
                      <small>Based on the <a target="_blank" href="https://dementia-directive.org/">Dementia Directive</a>, created by Dr. Barak Gaster at the University of Washington.<br/>
                             &copy; Zoe Skye, 2018</small>
                  </footer>

                </div>
              </div>

            </div>
          </div>
        </div>

    );
  }

}

export default App;
