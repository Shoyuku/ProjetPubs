import React, { Component } from 'react';
import API from '../../utils/API.js';

class Admin extends Component {

  state = {
    authors: "",
  }

  constructor(props){
    super(props);
    this.init();
  }

  init(){
    API.get_authors().then((data) => console.log(data.data));
    API.get_employees().then((data) => console.log(data.data));
    API.get_publishers().then((data) => console.log(data.data));
    API.get_stores().then((data) => console.log(data.data));
    API.get_titles().then((data) => console.log(data.data));
  }

  render() {
    const {authors} = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>
          <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i className="fas fa-bars"></i>
          </button>
        </nav>

        <div id="wrapper">
          <ul className="sidebar navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
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
        </div>

        <a>{authors}</a>
      </div>
    );
  }
}

export default Admin;