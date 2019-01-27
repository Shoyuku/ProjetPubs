import React, { Component } from 'react';

class Analyst1 extends Component {

  state={
    data: [],
  }

  constructor(props) {
    super(props);
    document.title = "Analyst";
    localStorage.setItem("title", "Analyst");
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