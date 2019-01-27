import React, { Component } from 'react';
import AllTables from '../../../utils/AllTables';
import API from '../../../utils/API.js';

class User extends Component {

  state = {
    authors: [],
    employees: [],
    publishers: [],
    stores: [],
    titles: []
  }

  constructor(props) {
    super(props);
    document.title = "User";
    localStorage.setItem("title","User");
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

        <div id="wrapper"><AllTables authors={authors} employees={employees} publishers={publishers} stores={stores} titles={titles}/>
        </div>
      </div>
    );
  }
}

export default User;