import React from 'react';
import { Grid, DialogTitle, TextField, Button ,Dialog, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false,};
        this.name = ''; 
        this.email = '';
        this.celphone = '';
        this.description = '';
    }
    handleDialog= () => {
        this.setState(({open})=>( {open:!open}));
    }
    handleSend = () => {
        console.log(this.name);
        
    }
    handleChange = (evt) =>{
        switch (evt.target.id) {
            case 'name':
                    this.name = evt.target.value;
                break;
            case 'email':
                    this.email = evt.target.value;
                break;
            case 'celphone':
                    this.celphone = evt.target.value;
                break;     
            case 'description':
                this.description = evt.target.value
            break;
            default:
                break;
        }
        console.log(this.name, this.email,this.celphone, this.description);

        
    }
    render(){
        return (
            <Grid item lg={12} xs={12}>
                <form>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item lg={7} xs={8}>
                            <TextField
                                    id='name'
                                    label='Name'
                                    margin="normal"
                                    fullWidth
                                    onChange={this.handleChange}
                                    required
                                />
                        </Grid>
                        <Grid item lg={7} xs={8}>
                            <TextField
                                    id='email'
                                    label='Email'
                                    type='email'
                                    margin="normal"
                                    fullWidth
                                    onChange={this.handleChange}
                                />
                        </Grid>
                        <Grid item lg={7} xs={8}>
                            <TextField
                                    id='celphone'
                                    type='number'
                                    label='CelPhone number'
                                    margin="normal"
                                    fullWidth
                                    onChange={this.handleChange}
                                />
                        </Grid>
                        <Grid item lg={7} xs={8}>
                            <TextField
                                id="description"
                                label="Description"
                                multiline
                                rows="4"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item lg={7} xs={8}>
                            <Button color='primary' variant="contained" onClick={this.handleDialog}>
                                Send
                            </Button>
                        </Grid>
                        <Grid item lg={7} xs={8}>
                            <Dialog   
                            open={this.state.open}
                            onClose={this.handleDialog}
                            aria-labelledby="responsive-dialog-title"  
                            >
                                <DialogTitle id="responsive-dialog-title">
                                    Confirm
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Are you sure on ready?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleDialog} color="secondary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleSend} color="primary" autoFocus>
                                        Agree
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
    
                </form>
            </Grid>
            
        );
    }
    
}