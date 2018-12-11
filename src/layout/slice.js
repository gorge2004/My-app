import React from 'react';
import { Grid, Paper, Typography, } from '@material-ui/core';
import background from '../img/background.jpg';

import { createStyled  } from '@material-ui/styles';

const Styled = createStyled({
  root: {
    marginTop: 20,
    background: `url(${background})` ,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain', 
    height: 500   
  },
  font :{
      
      backgroundColor: '#BBDEFB33'
  }
});


export default function Slice(props) {
    
    
    return( 
        <Styled>
            { ({classes}) =>
            <Grid container  spacing={8} justify='center'  alignContent='center'>
                <Grid item lg={11} xs={12}>
                    <Paper className={classes.root}>
                        <Grid container  spacing={8} justify='center'  alignContent='center' alignItems='center' >
                            <Grid item lg={4} xs={6}>
                                    <Typography className={classes.font}  variant='h3' align='center'>Dolor expedita sunt qui in a deserunt est similique voluptatem. Enim expedita cumque et cupiditate nesciunt. Sed et dolorem quo sed maiores. </Typography>
                            </Grid> 
                            <Grid item lg={4} xs={6}>
                                    <Typography className={classes.font}  variant='h3' align='center'>Dolor expedita sunt qui in a deserunt est similique voluptatem. Enim expedita cumque et cupiditate nesciunt. Sed et dolorem quo sed maiores. </Typography>
                            </Grid> 
                        </Grid>   
                    </Paper>
                </Grid>
                
            </Grid>}
        </Styled>
    );
}