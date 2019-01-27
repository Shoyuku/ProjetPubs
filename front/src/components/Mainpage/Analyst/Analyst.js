import React, { Component } from 'react';

class Analyst extends Component {

  constructor(props) {
    super(props);
    document.title = "Analyst";
    localStorage.setItem("title","Analyst");
  }

  render() {
    return (
      <div>
        <div id="wrapper">

        </div>
      </div>
    );
  }
}

export default Analyst;