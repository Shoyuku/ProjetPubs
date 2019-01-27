import React, { Component } from 'react';
import API from '../../../utils/API.js';
import User1 from './User1.js'
import User2 from './User2.js'
import User3 from './User3.js'
import User4 from './User4.js'
import { Route, Switch } from 'react-router-dom';
import TableAuthors from '../../../utils/tables/TableAuthors';
import TablePublishers from '../../../utils/tables/TablePublishers';
import TableStores from '../../../utils/tables/TableStores';
import TableTitles from '../../../utils/tables/TableTitles';

class User extends Component {

  state = {
    authors: [],
    publishers: [],
    stores: [],
    titles: []
  }

  constructor(props) {
    super(props);
    document.title = "User";
    localStorage.setItem("title","User");
  }

  componentDidMount() {
    this.init();
  }

  init() { // récupération de toutes les données
    API.get_authors().then((data) => { this.setState({ authors: data.data }) });
    API.get_publishers().then((data) => { this.setState({ publishers: data.data }) });
    API.get_stores().then((data) => { this.setState({ stores: data.data }) });
    API.get_titles().then((data) => { this.setState({ titles: data.data }) });
  }


  render() {
    const { authors,  publishers, stores, titles } = this.state;
    return (
      <div>

        <div id="wrapper">
          <Switch>
            <Route path={`${this.props.match.url}/all`} render={() =><div><TableAuthors authors={authors} /> <TablePublishers publishers={publishers}/> <TableStores stores={stores} /> <TableTitles titles={titles} /> </div> }/>
            <Route path={`${this.props.match.url}/1`}  render={() => <User1 />}/>
            <Route path={`${this.props.match.url}/2`}  render={() => <User2 />}/>
            <Route path={`${this.props.match.url}/3`}  render={() => <User3 />}/>
            <Route path={`${this.props.match.url}/4`}  render={() => <User4 />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default User;