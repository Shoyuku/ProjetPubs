import React, { Component } from 'react';
import './Login.css';

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

    render() {
        const { username } = this.state;
        return (
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
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;