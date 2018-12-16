import React from 'react';
import { Grid,LinearProgress   } from '@material-ui/core';
import Client from './client'
export default class Clients extends React.Component {
    constructor(props){
        super(props);
        this.state = {clients: <LinearProgress  />};
        this.arrayClients = [];
    }

    async componentWillMount(){
         const arrayClients = await this.getClients();
        this.setClients(arrayClients);
        this.setState({clients: this.arrayClients.map( (i, index) => <Grid item lg={3} key={index}>        
                                                            <Client client={i} />
                                                        </Grid>)
                                                    });
         
        
    }
    getClients = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        return json;
    } 
    setClients = (json) =>{
        console.log("set user" ,json);
        
        this.arrayClients = json;
    }
    render(){
        return (
                    <Grid container spacing={8}>
                        {this.state.clients}
                    </Grid>
                    
                   
                  
        )
    }
}