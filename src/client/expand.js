import React from 'react';
import {  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Item (props){
    return (
        <ExpansionPanel >
                                
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >{props.txt}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                         {props.summary}
                    </Typography>
                </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}