import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Bandeau.css'

class Bandeau extends Component {

	state = {
		title: localStorage.getItem("title"),
    };

    constructor(props){
        super(props);
    }
    
	componentDidMount(){
        this.setState({title: localStorage.getItem("title")});
    }
    
	redirectToLogin = () => {
		localStorage.clear();
		
		this.props.history.push("/");
	}

	render() {
        const { title } = this.state;
        
		return (
			<div>
				<AppBar position="static" className="bandeau navbar-dark bg-dark" >
					<Toolbar className="bandeau-inside">
						<Typography variant="h6" color="inherit" className="bandeau-title">
							{title}
            			</Typography>
						<Button color="inherit" className="bandeau-button" onClick={this.redirectToLogin}>Se déconnecter</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default Bandeau;