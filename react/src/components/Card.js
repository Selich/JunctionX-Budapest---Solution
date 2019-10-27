import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Shops from './Shops'
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Badge from "@material-ui/core/Badge";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KitchenIcon from '@material-ui/icons/Kitchen';

import { Dialog,  Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AppleIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import '../App.css'


const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "15",
  },
  card: {
    background: "linear-gradient(to top, #ece9e6, #ffffff)",
    boxShadow: "0 6px 14px #333",
    cursor: "pointer",
    margin: 15,
    padding: 23,
    height: 300,
    width: 250,
    opacity: 0.9,
    '&:hover': {
      background: "white",
      boxShadow: "0 1px 1px black",
      transition: 0.8,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function MyCard({ distance, name }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorBasketEl, setAnchorBasketEl] = useState(null);

  useEffect( () => {

  }, [])

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  const handleBasketOpen = () => {
    setOpen(true)
}
const handleBasketClose = () => {
    setOpen(false)

}
const handleClose = () => {
  setAnchorEl(null);
}



  return (
    <>
    <Card className={classes.card} fullWidth >
      <CardHeader
        title={name}
        className={classes.title}
        subheader="Category"
      />
      <CardMedia className={classes.media} title="Paella dish" />
      <Badge
        disabled={!isLogged}
        aria-controls="korpa"
        aria-haspopup="true"
        edge="start"
        onClick={handleBasketOpen}
        className={[classes.menuButton, classes.pullRight]}
        color="inherit"
        aria-label="Menu"
      >
        <ShoppingCart />
      </Badge>
      <Badge
        disabled={!isLogged}
        aria-controls="fridge"
        aria-haspopup="true"
        edge="start"
        onClick={handleBasketOpen}
        className={[classes.menuButton, classes.pullRight]}
        color="inherit"
        aria-label="Menu"
      >
        <KitchenIcon />
      </Badge>
      <Badge
        disabled={!isLogged}
        aria-controls="fridge"
        aria-haspopup="true"
        edge="start"
        onClick={handleBasketOpen}
        className={[classes.menuButton, classes.pullRight]}
        color="inherit"
        aria-label="Menu"
      >
        <AppleIcon />
      </Badge>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
      <Shops close={handleBasketClose}></Shops>
     </Dialog>
    </Card>
    </>
  );
}
