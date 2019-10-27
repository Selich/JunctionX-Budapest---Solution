import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
    shops: {
      width: "80%",
      height: "30%"
    }

  });

export default function Shops({user,close}) {

    const classes = useStyles();
  
  return (
    <div className={classes.shops}>
    <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    <List>
      <ListItem button >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="add account" />
      </ListItem>
    </List>
    </div>
  );
}