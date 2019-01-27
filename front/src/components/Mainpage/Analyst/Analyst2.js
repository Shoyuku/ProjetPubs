import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from '../../../utils/API.js';

class Analyst2 extends Component {

  state = {
    authors: [],
    data: []
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
    API.get_authors().then((data) => { this.setState({ authors: data.data }) }).then(() => {
      API.get_range_per_author().then((data) => { this.setState({ data: data.data.results }); this.setData(); });
    });
  }

  setData() { //aggregate ici car un aggregate dans un mapReduce ne fonctionne pas en back
    const {data, authors} = this.state;
    let array = [];
    for(let i of data){
      let tmp = i;
      let obj = authors.find(function(ele){
        return ele.au_id === tmp._id.author.au_id;
      });
      tmp._id.author = Object.assign(tmp._id.author, obj);
      array.push(tmp)
    }
    this.setState({data: array});
  }

  render() {
    const { data } = this.state;
    return (
      <div id="wrapper">
        <h2>Obtenir la tranche de prix d’un livre selon l’auteur, par magasin</h2>
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
                      accessor: "_id.author.au_fname"
                    },
                    {
                      Header: "Last Name",
                      accessor: "_id.author.au_lname"
                    },
                    {
                      Header: "State",
                      accessor: "_id.author.state"
                    }
                  ]
                },
                {
                  Header: "Book",
                  columns: [
                    {
                      Header: "Title",
                      accessor: "_id.title"
                    },
                    {
                      Header: "Min Price",
                      accessor: "value.min"
                    },
                    {
                      Header: "Max Price",
                      accessor: "value.max"
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

export default Analyst2;