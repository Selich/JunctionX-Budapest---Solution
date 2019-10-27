import React, { useState, useEffect } from "react";

import { AnimatedSwitch } from 'react-router-transition';

import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import Table from "./components/Table";
import Home from "./components/Home";
import Register from "./components/Register";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles,withStyles } from "@material-ui/styles";

import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./App.css";
const useStyles = makeStyles(theme => ({
  offset: {
    flexGrow: 1
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}
const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    transition: 0.7,
    textAlign: "center",
    minWidth: 150,
    '&:hover': {
      backgroundImage: "black" ,
      boxShadow: "0 2px 3px black",
      transition: 0.7,
      opacity: 0.6,
    },
    '&$selected': {
      backgroundImage: "black" ,
      color: "#33",
      boxShadow: "0 0 0.9px black",
      fontDisplay: "bold"
    },
    '&:focus': {
      backgroundImage: "black" ,
      color: "#333",
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);
const MyBar = withStyles(theme => ({
  root: {
    background: "linear-gradient(to top, #ece9e6, #ffffff)",
    textAlign: "center",
    paddingLeft: 20
  },
selected: {},
}))(props => <AppBar disableRipple {...props} />);
function App() {
  const [value, setValue] = useState({});
  const [isLoggedIn, setLogged] = useState(false);
  const classes = useStyles();

  useEffect(() => {}, [isLoggedIn]);
  return (
    <div>
      <MyBar position="absolute" title={<img src="./logo.jpg" />} color="default">
        <Toolbar>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={2}>
              <AntTab label="Products" component={Link} to="/search" />
            </Grid>
            <Grid item xs={2}>
              <AntTab label="Login" component={Link} to="/login" />
            </Grid>
            <Grid item xs={2}>
              <AntTab label="Register" component={Link} to="/register" />
            </Grid>
            <Grid item xs={2}>
              <AntTab label="Shops" component={Link} to="/table" />
            </Grid>
          </Grid>
        </Toolbar>
      </MyBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        <Route path="/table" component={Table} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
