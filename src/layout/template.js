import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from './navbar';
import Footer from './footer';
import Body from './body';


import Home from '../home';
import NoFound from '../noFound';
import Contact from '../contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default class Template extends React.Component {
    constructor(props){
        super(props);
        this.state =  {};
    }
    render(){
        return (
            <Router>
                <Grid container spacing={0} zeroMinWidth>
                     <Navbar />
                    <Body>
                        <Switch>
                            <Route exact path="/"  component={Home}/>
                            <Route path="/contact" component={Contact}  />
                            <Route  component={NoFound}/>
                        </Switch>
                    </Body>
                    <Footer />
                </Grid>
            </Router>
        );
    }
}