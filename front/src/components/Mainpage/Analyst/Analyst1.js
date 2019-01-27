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
    API.get_authors().then((data) => { console.log(data.data); this.setState({ authors: data.data }) });
    API.get_employees().then((data) => { console.log(data.data); this.setState({ employees: data.data }) });
    API.get_publishers().then((data) => { console.log(data.data); this.setState({ publishers: data.data }) });
    API.get_stores().then((data) => { console.log(data.data); this.setState({ stores: data.data }) });
    API.get_titles().then((data) => { console.log(data.data); this.setState({ titles: data.data }) });
  }

  render() {
    const {data} = this.state
    return (
      <div id="wrapper">
        <h2>Obtenir le nom du job de l’employé de la maison d’édition de tel livre</h2>
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

export default Analyst1;