import React, { Component } from 'react';
import API from '../../../utils/API.js';
import ReactTable from "react-table";
import "react-table/react-table.css";

class User1 extends Component {

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
    API.get_book_sales_per_author().then((data) => { this.setState({ data: data.data }) });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Obtenir l’auteur dont le livre a eu le plus de ventes par année</h2>
        <div className="row">
          <div className="col">
            <ReactTable
              data={data}
              columns={[
                {
                  Header: "Author",
                  columns: [
                    {
                      Header: "First Name",
                      accessor: "author.0.au_fname"
                    },
                    {
                      Header: "Last Name",
                      accessor: "author.0.au_lname"
                    },
                    {
                      Header: "City",
                      accessor: "author.0.city"
                    },
                    {
                      Header: "Phone",
                      accessor: "author.0.phone"
                    },
                    {
                      Header: "State",
                      accessor: "author.0.state"
                    }
                  ]
                },
                {
                  Header: "Book",
                  columns: [
                    {
                      Header: "Title",
                      accessor: "title"
                    },
                    {
                      Header: "Type",
                      accessor: "type"
                    },
                    {
                      Header: "Price",
                      accessor: "price"
                    },
                    {
                      Header: "Nb of sold",
                      accessor: "ytd_sales"
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

export default User1;