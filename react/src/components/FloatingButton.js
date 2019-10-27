import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        zIndex: 1000,
        bottom: theme.spacing(2),
        right: theme.spacing(4),
      },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons({hide}) {
  const classes = useStyles();

  return (
      <Fab onClick={hide} color="primary" aria-label="add" className={classes.fab}>
        <NavigationIcon />
      </Fab>
  );
}