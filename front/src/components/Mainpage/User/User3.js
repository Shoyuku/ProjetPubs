import React, { Component } from 'react';
import API from '../../../utils/API.js';
import ReactTable from "react-table";
import "react-table/react-table.css";

class User3 extends Component {

    state = {
        data: [],
    }

    constructor(props) {
        super(props);
        document.title = "User";
        localStorage.setItem("title", "User");
    }

    componentDidMount() {
        this.init();
    }

    init() { // récupération de toutes les données
        API.get_sales_per_book().then((data) => { this.setState({data:data.data}) });
    }


    render() {
        const { data } = this.state;
        return (
            <div>
                <h2>Obtenir le nombre de ventes par livre, par magasin</h2>
                <div className="row">
                    <div className="col">
                        <ReactTable
                            data={data}
                            columns={[
                                {
                                    Header: "Book Informations",
                                    columns: [
                                        {
                                            Header: "Title",
                                            accessor: "title"
                                        }
                                    ]
                                },
                                {
                                    Header: "Store Details",
                                    columns: [
                                        {
                                            Header: "Store name",
                                            accessor: "store_details.0.stor_name"
                                        }
                                    ]
                                },
                                {
                                    Header: "Sales",
                                    columns: [
                                        {
                                            Header: "Quantity",
                                            accessor: "Sales.qty"
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
            </div>
        );
    }
}

export default User3;