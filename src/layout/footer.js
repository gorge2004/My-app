import React from 'react';
import { createStyled  } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
const Styled = createStyled({
    
    footer :{
        
        backgroundColor: '#000',
        bottom: 0,
        height: 200,
        width: '100%',
        marginTop: 70
        
    }, white: { color:'#fff'},
    link :{textDecoration: 'none',color:'#fff'}
  });
  

export default function Footer (){

    return (
                <Styled>
                    {({classes})=>
                            <div className={classes.footer} >
                                <Grid container spacing={6}>
                                    <Grid item xs={6} lg={7}>
                                        <Grid container direction='column'>
                                            <Grid item lg={6}>
                                                <Typography color='error' variant='display1'>We Are Testing it</Typography>
                                            </Grid>
                                            <Grid item lg={6}>
                                                <Typography color='error' variant='subtitle1'>Est minus est laudantium earum voluptate accusamus. Et iste repudiandae quod blanditiis esse dolorum.</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6} lg={5}>
                                        <Grid container direction='column' justify='flex-end' alignContent='flex-end'>
                                            <Grid item lg={12}>
                                                <Typography color='error' variant='display1'>Social Network</Typography>
                                                <ul className={classes.white}>
                                                    <li><a className={classes.link} href="https://www.instagram.com/?hl=es-la" target='_blank' >Instagram</a></li>
                                                </ul>
                                            </Grid>    
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                            </div>
                                    
                    }
                </Styled>
    );
}