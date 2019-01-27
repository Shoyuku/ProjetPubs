import React, { Component } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    state = {
        username: "",
    }

    handleChangeEvent = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    checkUser = (event) => {
        event.preventDefault();
        const { username } = this.state;
        if (username === "Admin") {
            this.props.history.push("/mainpage/admin");
        }
        else if (username === "Analyst") {
            this.props.history.push("/mainpage/analyst");
        }
        else {
            this.props.history.push("/mainpage/user");
        }
    }

    redirectTo = (path) => {
        this.props.history.push(path);
    }

    render() {
        const { username } = this.state;
        return (
            <div className="login">
                
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={this.checkUser}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input id="inputEmail" className="form-control" placeholder="Username" required="required" autoFocus="autofocus" value={username} onChange={this.handleChangeEvent("username")} />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Login</button>
                        </form>
                        <div className = "login-content-button">
                            <Button className="login-button" variant="contained" color="primary" onClick={() => this.redirectTo("/mainpage/admin/all")}>Admin</Button>
                            <Button className="login-button" variant="contained" color="secondary" onClick={() => this.redirectTo("/mainpage/analyst/all")}>Analyst</Button>
                            <Button className="login-button" variant="contained" color="primary" onClick={() => this.redirectTo("/mainpage/user/all")}>User</Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;