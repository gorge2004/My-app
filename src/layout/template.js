import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from './navbar';
import Slice from './slice';
import Footer from './footer';

import Body from './body';
export default class Template extends React.Component {
    constructor(props){
        super(props);
        this.state =  {};
    }
    render(){
        return (
            <Grid container spacing={6}>
               <Navbar />
                <Body>
                    <Slice />
                    <Slice />
                </Body>
               <Footer />
            </Grid>
        );
    }
}