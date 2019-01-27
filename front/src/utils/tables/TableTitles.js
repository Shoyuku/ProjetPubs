import React, { Component } from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

class TableTitles extends Component {

    render() {
        const { titles } = this.props;
        return (
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
                        filterable
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
        );
    }
}

export default TableTitles;