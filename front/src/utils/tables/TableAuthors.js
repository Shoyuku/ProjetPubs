import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TableAuthors extends Component {

  render() {
    const { authors } = this.props;
    return (
      <div className="row">
        <div className="col">
          <h3>Authors</h3>
          <ReactTable
            data={authors}
            columns={[
              {
                Header: "Name",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "au_fname"
                  },
                  {
                    Header: "Last Name",
                    id: "au_lname",
                    accessor: d => d.au_lname
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "Phone",
                    accessor: "phone"
                  },
                  {
                    Header: "Address",
                    accessor: "address"
                  },
                  {
                    Header: "City",
                    accessor: "city"
                  },
                  {
                    Header: "State",
                    accessor: "state"
                  },
                  {
                    Header: "Zip",
                    accessor: "zip"
                  },
                  {
                    Header: "Contract",
                    accessor: "contract"
                  }
                ]
              }
            ]}
            defaultPageSize={5}
            filterable
            className="-striped -highlight datatable"
          />
        </div>
      </div>
    );
  }
}

export default TableAuthors;