import React from 'react'
import { Grid, AppBar, Toolbar,Typography, Button } from '@material-ui/core';

export default  function Navbar  (props) {
return ( <Grid item lg={12} xs={12} >
            <AppBar position='static'> 
                <Toolbar >
                    <Grid item lg={6} xs={3}>
                        <Typography variant="h6" color="inherit" >
                            Home
                        </Typography>
                    </Grid>
                    <Grid item lg={6}  xs={9}>
                        <Grid container justify='flex-end'>
                            <Button color="inherit">
                                Contact
                            </Button>
                            <Button color="inherit">
                                Contact 2
                            </Button>
                        </Grid>
                    </Grid>
                
                </Toolbar>
            </AppBar>
        </Grid>);
}