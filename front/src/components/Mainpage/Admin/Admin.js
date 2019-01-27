import React, { Component } from 'react';
import API from '../../../utils/API.js';
import AllTables from '../../../utils/AllTables.js';
import { Route, Switch} from 'react-router-dom';
import './Admin.css';
import Charts from './Charts.js';

class Admin extends Component {

  state = {
    authors: [],
    employees: [],
    publishers: [],
    stores: [],
    titles: []
  }

  constructor(props) {
    super(props);
    document.title = "Admin";
    localStorage.setItem("title","Admin");
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

  redirectToChart = () =>{
    this.props.history.push('/admin/charts')
  }

  render() {
    const { authors, employees, publishers, stores, titles } = this.state;
    return ( 
        <div id="wrapper" className="admin-content">
          <Switch>
            <Route path={`${this.props.match.url}/all`} render={() => <AllTables authors={authors} employees={employees} publishers={publishers} stores={stores} titles={titles}/>}/>
            <Route path={`${this.props.match.url}/charts`}  render={() => <Charts />}/>
          </Switch>
        </div>
    );
  }
}

export default Admin;