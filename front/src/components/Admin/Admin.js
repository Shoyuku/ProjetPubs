import React, { Component } from 'react';
import API from '../../utils/API.js';

import ReactTable from "react-table";
import "react-table/react-table.css";
import TableAuthors from '../../utils/tables/TableAuthors.js';
import TableEmployees from '../../utils/tables/TableEmployees.js';
import TableStores from '../../utils/tables/TableStores.js';
import TablePublishers from '../../utils/tables/TablePublishers.js';
import TableTitles from '../../utils/tables/TableTitles.js';

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
  }

  componentDidMount() {
    this.init();
  }

  init() { // récupération de toutes les données
    API.get_authors().then((data) => { console.log(data.data); this.setState({ authors: data.data }) });
    API.get_employees().then((data) => { console.log(data.data); this.setState({ employees: data.data }) });
    API.get_publishers().then((data) => { console.log(data.data); this.setState({ publishers: data.data }) });
    API.get_stores().then((data) => { console.log(data.data); this.setState({ stores: data.data }) });
    API.get_titles().then((data) => { console.log(data.data); this.setState({ titles: data.data }) });
  }

  render() {
    const { authors, employees, publishers, stores, titles } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="#">Admin</a>
        </nav>

        <div id="wrapper">
          <ul className="sidebar navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li>
          </ul>
          <div className="container">
            <h2>Toutes les données</h2>
            <TableAuthors authors={authors}/>
            <TableEmployees employees={employees}/>
            <TablePublishers publishers={publishers}/>
            <TableStores stores={stores}/>
            <TableTitles titles={titles}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;