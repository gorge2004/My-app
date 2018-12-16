import React from 'react';
import {  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Expand from './expand';

export default function Client (props){
    return (    <div>
                    <Expand txt={`client: ${props.client.username}`}  summary={`Name: ${props.client.name}`}/>
                    <Expand txt={`Email `}  summary={props.client.email}/>
                    <Expand txt={`Direction `}  summary={`${props.client.address.street}, ${props.client.address.suite}, ${props.client.address.city}, ${props.client.address.zipcode}`}/>
                    <Expand txt={`Phone`}  summary={props.client.phone}/>
                    <Expand txt={`Company`}  summary={`${props.client.company.name}, ${props.client.company.catchPhrase}, ${props.client.company.bs}`}/>
                    <Expand txt={`WebSite`}  summary={props.client.website}/>

                </div>
               
           
    );
}