import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Analyst1 from './Analyst1';
import Analyst2 from './Analyst2';
import API from '../../../utils/API.js';
import AllTables from '../../../utils/AllTables.js';

class Analyst extends Component {

  state = {
    authors: [],
    employees: [],
    publishers: [],
    stores: [],
    titles: []
  }

  constructor(props) {
    super(props);
    document.title = "Analyst";
    localStorage.setItem("title","Analyst");
  }

  componentDidMount() {
    this.init();
  }

  init() { // récupération de toutes les données
    API.get_authors().then((data) => { this.setState({ authors: data.data }) });
    API.get_employees().then((data) => { this.setState({ employees: data.data }) });
    API.get_publishers().then((data) => { this.setState({ publishers: data.data }) });
    API.get_stores().then((data) => { this.setState({ stores: data.data }) });
    API.get_titles().then((data) => { this.setState({ titles: data.data }) });
  }

  render() {
    const { authors, employees, publishers, stores, titles } = this.state;
    return (
      <div>
        <div id="wrapper">
          <Switch>
            <Route path={`${this.props.match.url}/all`} render={() => <AllTables authors={authors} employees={employees} publishers={publishers} stores={stores} titles={titles}/>}/>
            <Route path={`${this.props.match.url}/1`}  render={() => <Analyst1 />}/>
            <Route path={`${this.props.match.url}/2`}  render={() => <Analyst2 />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Analyst;