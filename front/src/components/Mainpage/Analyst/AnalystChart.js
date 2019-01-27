import React, { Component } from 'react';
import { Bar,Doughnut } from 'react-chartjs-2';
import API from '../../../utils/API.js';

const data = {
	labels: ['Red','Green','Yellow'],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class AnalystCharts extends Component {

    state = {
        data: [],
        bar_data: {},
        doughnut_data: {},
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.init();
    }

    init() { // récupération de toutes les données
        API.get_type_by_sales().then((data) => { this.setBarData(data.data) });
        API.get_type_total().then((data) => { this.setDoughnutData(data.data.results) });
    }

    setBarData(data) {
        let labels = [];
        let bar_data = [];

        for (let i of data) {
            labels.push(i._id);
            bar_data.push(i.tot);
        }

        let tmp = {
            labels: labels,
            datasets: [
                {
                    label: 'Nombre de ventes',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: bar_data
                }
            ]
        };
        this.setState({bar_data: tmp});
    }

    generateBarChart(){
        let table = [];
        if(this.state.bar_data.labels)
        {
            table.push(<Bar data={this.state.bar_data} key={0}/>);
        }
        return table;
    }

    setDoughnutData(data) {
        let labels = [];
        let array = [];

        for (let i of data) {
            labels.push(i._id);
            array.push(i.value.tot);
        }

        let tmp = {
            labels: labels,
            datasets: [{
                data: array,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#70C179',
                '#9F5561'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#70C179',
                '#9F5561'
                ]
            }]
        };
        this.setState({doughnut_data: tmp});
    }

    generateDoughnutChart(){
        let table = [];
        if(this.state.doughnut_data.labels)
        {
            table.push(<Doughnut  data={this.state.doughnut_data} key={0}/>);
        }
        return table;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Nombre de ventes par type de livre</h3>
                        {
                            this.generateBarChart()
                        }
                        <h3>Nombre de livre par catégorie</h3>
                        {
                            this.generateDoughnutChart()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AnalystCharts;