import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TableEmployees extends Component {

    render() {
        const { employees } = this.props;
        return (
            <div className="row">
                <div className="col">
                    <h3>Employees</h3>
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
                        filterable
                        className="-striped -highlight datatable"
                    />
                </div>
            </div>
        );
    }
}

export default TableEmployees;