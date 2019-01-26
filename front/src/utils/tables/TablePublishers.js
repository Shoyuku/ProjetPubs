import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TablePublishers extends Component {

    render() {
        const { publishers } = this.props;
        return (
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
        );
    }
}

export default TablePublishers;