import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Admin from './components/Admin/Admin.js';
import Analyst from './components/Analyst/Analyst.js';
import User from './components/User/User.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch history={this.props.history}>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/analyst" component={Analyst} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
