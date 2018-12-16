import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from './navbar';
import Footer from './footer';
import Body from './body';


import Home from '../home';
import NoFound from '../noFound';
import Contact from '../contact';
import Client from '../client';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class Template extends React.Component {
    constructor(props){
        super(props);
        this.state =  {};
    }
    render(){
        return (
            <Router>
                <Grid container spacing={0} >
                     <Navbar />
                    <Body>
                        <Switch>
                            <Route exact path="/"  component={Home}/>
                            <Route exact path="/contact" component={Contact}  />
                            <Route exact path="/client" component={Client}  />
                            <Route  component={NoFound}/>
                        </Switch>
                    </Body>
                    <Footer />
                </Grid>
            </Router>
        );
    }
}