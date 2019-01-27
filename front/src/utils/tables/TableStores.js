import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TableStores extends Component {

    render() {
        const { stores } = this.props;
        return (
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
                        filterable
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
        );
    }
}

export default TableStores;