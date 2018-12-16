import React from 'react';
import { LinearProgress, Grid, DialogTitle, TextField, Button ,Dialog, DialogContent, 
        DialogContentText, DialogActions,  Snackbar, IconButton,    } from '@material-ui/core';


import CloseIcon from '@material-ui/icons/Close';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false,loader:'', notificacion: false};
        this.name = ''; 
        this.email = '';
        this.celphone = '';
        this.description = '';
        this.snackbar= '';
    }

    handleDialog= () => {
        this.setState(({open})=>( {open:!open}));
    }

    handleSend = async (evt) => {
        const aux = this.filledElements(); 
        let json;
        let txt ;
        this.setState({loader: <LinearProgress color="secondary" />});
        if(aux){
            json = await this.post();
            txt = json ? this.clearForm() : 'Sorry , you try it again ';
            

        }else {
            txt = 'You must fill every required Field(*)'
        }
        this.handleClose(txt);

        this.handleDialog();
        
        this.setState({loader: ''});
    

        
    } 
    post = async () =>{
        let json ;
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: this.name,
                  body: this.description,
                  userId: 1
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              });
              json = await response.json(); 
        } catch (error) {
            console.error("error", error)
        }
        
          return json;
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
        
    }

    filledElements = () =>{
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const description  = document.getElementById('description');
        const patt = new RegExp(/^\w+/);
        const pattEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

         if(patt.test(name.value) && pattEmail.test(email.value) && patt.test(description.value)){
             return true;
         }
         return false;
    } 
 
    handleClose = (txt = '') => {
        this.snackbar = txt
        this.setState( ({notificacion}) => { return ( {notificacion: !notificacion, } );});
    }

    clearForm = () =>{
        document.getElementById("form").reset();
        return 'Sent!!';

    }

    render(){
        return (
            <Grid item lg={12} xs={12}>
                    <Snackbar
                        open={this.state.notificacion}
                       
                        anchorOrigin={{  vertical: 'top', horizontal: 'left' }}
                        autoHideDuration={1000}
                        ContentProps={{
                        'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.snackbar}</span>}
                        action={[
                            <IconButton
                              key="close"
                              aria-label="Close"
                              color="inherit"
                              onClick={()=>this.handleClose('')}
                            >
                              <CloseIcon />
                        </IconButton>]}
                    />
                {this.state.loader}
                <form id='form'>
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
                                    required
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
                                required
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
