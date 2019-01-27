import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Bandeau from './Bandeau/Bandeau';
import './Mainpage.css'
import Admin from './Admin/Admin.js';
import Analyst from './Analyst/Analyst';
import User from './User/User';
import Sidebar from './Sidebar/Sidebar';

class Mainpage extends Component {

    state = {

    }

    /*constructor(props) {
        super(props);
    }*/

    routeToLogin() // redirige vers la page de register
    {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="mainpage">
                <div className="MuiToolbar-regular-39 mainpage-bandeau">
                    <Bandeau history={this.props.history}></Bandeau>
                </div>
                <div className="mainpage-content">
                        <Sidebar/>
                    <div className="mainpage-content-main">
                        <Switch history={this.props.history}>
                            <Route path={`${this.props.match.url}/admin`} component={Admin} />
                            <Route path={`${this.props.match.url}/analyst`} component={Analyst} />
                            <Route path={`${this.props.match.url}/user`} component={User} />
                        </Switch>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Mainpage);