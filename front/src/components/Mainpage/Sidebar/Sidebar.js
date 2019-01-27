import React, { Component } from 'react';
//import axios from 'axios';
//import Form from '../Form/Form';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Sidebar.css';
import { withRouter } from 'react-router-dom';
import SidebarItem from '../../../classes/SidebarItem.js'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class Sidebar extends Component {

    state = {
        items: [],
    };

    componentDidMount(){
        this.init(this.props.location.pathname)
    }

    init(path){
        let array = [];
        if(path.includes("admin")){
            array.push(new SidebarItem("Informations base","/mainpage/admin/all"));
            array.push(new SidebarItem("Graphiques","/mainpage/admin/charts"));
            this.setState({items: array});            
        }
        else if(path.includes("analyst")){
            array.push(new SidebarItem("Requête 1","/mainpage/analyst"));
            array.push(new SidebarItem("Requête 2","/mainpage/analyst"));
            this.setState({items: array});
        }
        else{
            array.push(new SidebarItem("Requête 1","/mainpage/user"));
            array.push(new SidebarItem("Requête 2","/mainpage/user"));
            array.push(new SidebarItem("Requête 3","/mainpage/user"));
            array.push(new SidebarItem("Requête 4","/mainpage/user"));
            this.setState({items: array});
        }
    }

    generateSidebar(){
        const {items} = this.state;
        let table = [];

        for(let i =0; i < items.length; i++){
            let item = items[i];
            table.push(
                <ListItemLink href={item.path} className="listItem" key={i} > 
                    <ListItemText primary={item.text} />
                </ListItemLink>
            )
        }
        return table;
    }

    render() {
        return (
            <div className="sidebar">
                <List component="nav">
                    {
                        this.generateSidebar()
                    }
                </List>
            </div>
        )
    }
}

export default withRouter(Sidebar);