import React from 'react'
import { Grid, AppBar, Toolbar,Typography,} from '@material-ui/core';
import {  Link } from "react-router-dom";

export default  function Navbar  (props) {
return ( <Grid item lg={12}  md ={12} sm={12} xl={12} xs={12} >
            <AppBar position='static'> 
                <Toolbar >
                    <Grid item lg={6} sm={3}>
                        <Typography variant="h6" color="inherit" >
                            <Link style={{textAlign:'center', textDecoration:'none',color:'#fff'}} to='/'>Home</Link>

                        </Typography>
                    </Grid>
                    <Grid item lg={6}  sm={9}>
                        <Grid container justify='flex-end'>
                            <ul style={{display:'inline',listStyleType:'none'}}>
                                <li  style={{display:'inline', margin: 10}} >
                                    <Link style={{textAlign:'center', textDecoration:'none',color:'#fff'}} to='/contact'>Contact</Link>
                                </li>
                                <li style={{display:'inline'}}>
                                    <Link style={{textAlign:'center', textDecoration:'none', color:'#fff'}} to='/client'>Client</Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                
                </Toolbar>
            </AppBar>
        </Grid>);
}