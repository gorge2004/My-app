import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function NoFound(){
    return(
        <Grid item lg={12} xs={12}>
            <Typography variant='display1'>
                Error 404!!. No Found matched.
            </Typography>
        </Grid>
    );
}