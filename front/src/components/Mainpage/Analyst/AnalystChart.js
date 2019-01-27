import React, { Component } from 'react';
import { Line,Bar } from 'react-chartjs-2';
import API from '../../../utils/API.js';

const line_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const bar_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class AnalystCharts extends Component {

    state = {
        data: [],
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.init();
    }
  
    init() { // récupération de toutes les données
      API.get_type_by_sales().then((data) => { console.log(data.data);this.setState({ data: data.data }) });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Taille moyenne d’un nouvel élément dans la base de données</h3>
                        <Bar data={bar_data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AnalystCharts;