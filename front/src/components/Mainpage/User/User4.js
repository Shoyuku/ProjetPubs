import React, { Component } from 'react';
import AllTables from '../../../utils/AllTables';
import API from '../../../utils/API.js';
import ReactTable from "react-table";
import "react-table/react-table.css";

class User4 extends Component {

    state = {
        data: []
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
        API.get_sales_per_publishers().then((data) => { this.setState({data:data.data}) });
    }


    render() {
        const { data } = this.state;
        return (
            <div>
                <h2>Obtenir le nombre de livre vendu par ville (et par maison d’édition)</h2>
                <div className="row">
                    <div className="col">
                        <ReactTable
                            data={data}
                            columns={[
                                {
                                    Header: "Publisher Information",
                                    columns: [
                                        {
                                            Header: "Name",
                                            accessor: "_id.pub_name.0"
                                        },
                                        {
                                            Header: "City",
                                            accessor: "_id.pub_city.0"
                                        }
                                    ]
                                },
                                {
                                    Header: "Sales number",
                                    columns: [
                                        {
                                            Header: "Total",
                                            accessor: "tot"
                                        }
                                    ]
                                },
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

export default User4;