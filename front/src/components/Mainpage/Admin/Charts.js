import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
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

class Charts extends Component {

  state = {
    authors: [],
    employees: [],
    publishers: [],
    stores: [],
    titles: []
  }

  constructor(props) {
    super(props);
  }

  init() { 
  }

  

  render() {
    return (
      <div>
        
        <Line data={data} />
        <h3>Taille moyenne d’un nouvel élément dans la base de données</h3>
        <h3>Pourcentage de la capacité de stockage restante</h3>
        <h3>Indicateur sur le nombre de mise à jour par mois</h3>
        <h3>Indicateur du bon fonctionnement des requêtes</h3>
        <h3>Pourcentage des infrastructures en panne</h3>
        <h3>Temps moyen de la résolution des problèmes liées aux pannes</h3>
      </div>
    );
  }
}

export default Charts;