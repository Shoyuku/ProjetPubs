import React, { Component } from 'react';
//import axios from 'axios';
//import Form from '../Form/Form';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Sidebar.css';
import { withRouter } from 'react-router-dom';
import SidebarItem from '../../../classes/SidebarItem.js'
import { Button } from '@material-ui/core';

class Sidebar extends Component {

    state = {
        items: [],
    };

    componentDidMount(){
        this.init(this.props.location.pathname)
    }

    init(path){ // permet d'initialiser la sidebar selon la vue
        let array = [];
        if(path.includes("admin")){
            array.push(new SidebarItem("Informations de base","/mainpage/admin/all"));
            array.push(new SidebarItem("Tableau de bord","/mainpage/admin/charts"));
            this.setState({items: array});            
        }
        else if(path.includes("analyst")){
            array.push(new SidebarItem("Informations de base","/mainpage/analyst/all"));
            array.push(new SidebarItem("Tableau de bord","/mainpage/analyst/charts"));
            array.push(new SidebarItem("Requête 1","/mainpage/analyst/1"));
            array.push(new SidebarItem("Requête 2","/mainpage/analyst/2"));
            this.setState({items: array});
        }
        else{
            array.push(new SidebarItem("Informations de base","/mainpage/user/all"));
            array.push(new SidebarItem("Requête 1","/mainpage/user/1"));
            array.push(new SidebarItem("Requête 2","/mainpage/user/2"));
            array.push(new SidebarItem("Requête 3","/mainpage/user/3"));
            array.push(new SidebarItem("Requête 4","/mainpage/user/4"));
            this.setState({items: array});
        }
    }

    redirectTo = (path) => {
        this.props.history.push(path);
    }

    generateSidebar(){
        const {items} = this.state;
        let table = [];

        for(let i =0; i < items.length; i++){
            let item = items[i];
            table.push(
                <Button onClick={() => this.redirectTo(item.path)} className="listItem" key={i} style={{color:"white"}} > 
                    {item.text}
                </Button>
            )
        }
        return table;
    }

    render() {
        return (
            <div className="sidebar">
                    {
                        this.generateSidebar()
                    }
            </div>
        )
    }
}

export default withRouter(Sidebar);