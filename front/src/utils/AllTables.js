import React, { Component } from 'react';

import TableAuthors from './tables/TableAuthors.js';
import TableEmployees from './tables/TableEmployees.js';
import TableStores from './tables/TableStores.js';
import TablePublishers from './tables/TablePublishers.js';
import TableTitles from './tables/TableTitles.js';

class AllTables extends Component {

  render() {
    const { authors, employees, publishers, stores, titles } = this.props;
    return (
      <div className="container">
        <h2>Toutes les données</h2>
        <TableAuthors authors={authors}/>
        <TableEmployees employees={employees}/>
        <TablePublishers publishers={publishers}/>
        <TableStores stores={stores}/>
        <TableTitles titles={titles}/>
      </div>
    );
  }
}

export default AllTables;