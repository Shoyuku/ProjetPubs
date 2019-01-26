import React, { Component } from 'react';
import API from '../../utils/API.js';

import ReactTable from "react-table";
import "react-table/react-table.css";

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
          <a className="navbar-brand mr-1" href="index.html">Admin</a>
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


          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Auteurs</h3>
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
                  className="-striped -highlight datatable"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">

                <h3>Employées</h3>
                <ReactTable
                  data={employees}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "First Name",
                          accessor: "fname"
                        },
                        {
                          Header: "Last Name",
                          id: "lname",
                          accessor: d => d.lname
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Minit",
                          accessor: "minit"
                        },
                        {
                          Header: "Hire date",
                          accessor: "hire_date"
                        },
                        {
                          Header: "Job",
                          accessor: "Jobs.0.job_desc"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={5}
                  className="-striped -highlight datatable"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">

                <h3>Publishers</h3>
                <ReactTable
                  data={publishers}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "Name",
                          accessor: "pub_name"
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "City",
                          accessor: "city"
                        },
                        {
                          Header: "State",
                          accessor: "state"
                        },
                        {
                          Header: "Country",
                          accessor: "country"
                        },
                        {
                          Header: "PR info",
                          accessor: "Pub_info.0.pr_info"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={5}
                  className="-striped -highlight datatable"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">

                <h3>Stores</h3>
                <ReactTable
                  data={stores}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "Name",
                          accessor: "stor_name"
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Address",
                          accessor: "stor_address"
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
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={5}
                  className="-striped -highlight datatable"
                  SubComponent={row => {
                    return (
                      <div style={{ padding: "20px" }}>
                        <ReactTable
                          data={row.original.Discounts}
                          columns={[
                            {
                              Header: "Discounts",
                              columns: [
                                {
                                  Header: "discounttype",
                                  accessor: "discounttype"
                                },
                                {
                                  Header: "lowqty",
                                  accessor: "lowqty"
                                },
                                {
                                  Header: "highqty",
                                  accessor: "highqty"
                                },
                                {
                                  Header: "discount",
                                  accessor: "discount"
                                }
                              ]
                            }
                          ]}
                          defaultPageSize={row.original.Discounts.length}
                          showPagination={false}
                        />
                      </div>
                    );
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">

                <h3>Titles</h3>
                <ReactTable
                  data={titles}
                  columns={[
                    {
                      Header: "Name",
                      columns: [
                        {
                          Header: "Title",
                          accessor: "title"
                        }
                      ]
                    },
                    {
                      Header: "Info",
                      columns: [
                        {
                          Header: "Type",
                          accessor: "type"
                        },
                        {
                          Header: "Price",
                          accessor: "price"
                        },
                        {
                          Header: "Advance",
                          accessor: "advance"
                        },
                        {
                          Header: "YTD sales",
                          accessor: "ytd_sales"
                        },
                        {
                          Header: "Notes",
                          accessor: "notes"
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={5}
                  className="-striped -highlight datatable"
                  SubComponent={row => {
                    return (
                      <div>
                        <div style={{ padding: "20px" }}>
                          <ReactTable
                            data={row.original.Titleauthor}
                            columns={[
                              {
                                Header: "Title Author",
                                columns: [
                                  {
                                    Header: "AU order",
                                    accessor: "au_ord"
                                  },
                                  {
                                    Header: "Royaltyper",
                                    accessor: "royaltyper"
                                  }
                                ]
                              }
                            ]}
                            defaultPageSize={row.original.Titleauthor.length}
                            showPagination={false}
                          />
                        </div>
                        <div style={{ padding: "20px" }}>
                          <ReactTable
                            data={row.original.Roysched}
                            columns={[
                              {
                                Header: "Roysched",
                                columns: [
                                  {
                                    Header: "lorange",
                                    accessor: "lorange"
                                  },
                                  {
                                    Header: "hirange",
                                    accessor: "hirange"
                                  },
                                  {
                                    Header: "royalty",
                                    accessor: "royalty"
                                  }
                                ]
                              }
                            ]}
                            defaultPageSize={row.original.Roysched.length}
                            showPagination={false}
                          />
                        </div>
                        <div style={{ padding: "20px" }}>
                          <ReactTable
                            data={row.original.Sales}
                            columns={[
                              {
                                Header: "Sales",
                                columns: [
                                  {
                                    Header: "stor_id",
                                    accessor: "stor_id"
                                  },
                                  {
                                    Header: "ord_num",
                                    accessor: "ord_num"
                                  },
                                  {
                                    Header: "ord_date",
                                    accessor: "ord_date"
                                  },
                                  {
                                    Header: "qty",
                                    accessor: "qty"
                                  },
                                  {
                                    Header: "payterms",
                                    accessor: "payterms"
                                  }
                                ]
                              }
                            ]}
                            defaultPageSize={row.original.Sales.length}
                            showPagination={false}
                          />
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;