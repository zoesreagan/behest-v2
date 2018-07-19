import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import UserFormContainer from './UserFormContainer';
import LoginRegister from './LoginRegister';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  };

  render() {
    return (
      <div className="App-container">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Behest</h1>
        </header>

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
    );
  }

}

export default App;
