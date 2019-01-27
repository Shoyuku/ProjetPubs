import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Mainpage from './components/Mainpage/Mainpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch history={this.props.history}>
          <Route exact path="/" component={Login} />
          <Route path="/mainpage" component={Mainpage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
