import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from '../../../utils/API.js';

class Analyst1 extends Component {

  state={
    data: [],
  }

  constructor(props) {
    super(props);
    document.title = "Analyst";
    localStorage.setItem("title", "Analyst");
  }

  componentDidMount() {
    this.init();
  }

  init() { // récupération de toutes les données
    API.get_list_employees().then((data) => { this.setState({ data: data.data }) });    
  }

  render() {
    const {data} = this.state
    return (
      <div id="wrapper">
        <h2>Obtenir le nom du job des employés de la maison d’édition de tel livre</h2>
        <div className="row">
          <div className="col">
            <ReactTable
              data={data}
              columns={[
                {
                  Header: "Book",
                  columns: [
                    {
                      Header: "Title",
                      accessor: "title"
                    }
                  ]
                },
                {
                  Header: "Publisher",
                  columns: [
                    {
                      Header: "Name",
                      accessor: "publisher_info.0.pub_name"
                    }
                  ]
                }
              ]}
              defaultPageSize={5}
              filterable
              className="-striped -highlight datatable"              
              SubComponent={row => {
                return (
                    <div style={{ padding: "20px" }}>
                        <ReactTable
                            data={row.original.list_employees}
                            columns={[
                                {
                                    Header: "Employees",
                                    columns: [
                                        {
                                            Header: "First Name",
                                            accessor: "fname"
                                        },
                                        {
                                            Header: "Last Name",
                                            accessor: "lname"
                                        },
                                        {
                                            Header: "Job",
                                            accessor: "Jobs.0.job_desc"
                                        }
                                    ]
                                }
                            ]}
                            defaultPageSize={row.original.list_employees.length}
                            showPagination={false}
                        />
                    </div>
                );
            }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Analyst1;