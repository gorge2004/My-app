import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function Cards (props){
    return(
        <Grid container spacing={16} justify='center'>
            <Grid item lg={3} xs={6}>
                <Card > 
                    <CardContent>
                        <Typography variant='title'>
                            sint-ut-consequuntur Dicta ut ut nemo esse mollitia quidem incidunt enim at.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={3} xs={6}>
                <Card > 
                    <CardContent>
                        <Typography variant='title'>
                            sint-ut-consequuntur Dicta ut ut nemo esse mollitia quidem incidunt enim at.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg={3} xs={6}>
                <Card > 
                    <CardContent>
                        <Typography variant='title'>
                            sint-ut-consequuntur Dicta ut ut nemo esse mollitia quidem incidunt enim at.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            
        </Grid>
    );
}