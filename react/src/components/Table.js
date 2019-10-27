import React, { useState, useEffect } from "react";
import FloatingButton from "./FloatingButton";
import Sliders from "./Sliders";
import axios from "axios";
import Map from '../components/Map'
import "../App.css";

import {
  Paper,
  Typography,
  Slider,
  Input,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Grid,
  Checkbox
} from "@material-ui/core";

import MyCard from "./Card";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  table:{
    minHeight: "800px",
    position: "absolute"

  },
  root: {
    width: "100%",
    position: "absolute",
    background: "linear-gradient(to top, #ece9e6, #ffffff)",
    height: "20px",
    bottom: 70
  },
  outer: {
    flexFrow: 1,
    padding: 20
  },
  card: {
    padding: theme.spacing(2)
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    width: 80,
    height: 50,
    fontSize: 12
  },
  smallIcon: {
    fontSize: 15,
    paddingRight: 3
  },
  pullRight: {
    paddingLeft: 50,
    float: "right"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(8)
  },
  dense: {
    marginTop: 19
  }
}));

function Table() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [hidde, setHide] = useState(true);
  const [groceries, setGroceries] = useState([]);
  const [shops, setShops] = useState([]);
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState({
    latitude: 47.474315,
    longitude: 19.0956333
  });

  useEffect(() => {

    const headers = { headers: { 'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f' } }
    axios.get("https://dev.tescolabs.com/locations/search?sort=near:\"21,46\"", headers)
      .then(res => {
        let data = res.data.results
      })
      .catch(err => alert(err));

  }, []);
  const showItems = () => {

    setHide(!hidde);
  };

  useEffect(() => { 

  },[value,shops,coords]);


  useEffect(() => {
  }, []);

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };
  const handleClick = e  => {
    // could not figure out , can't get the child prop so this would just for the presentation
    switch((Math.random() * 10) % 5){
      case 2 : {
        setCoords({ longitude: 19.077352, latitude: 47.4813 })
        break;
      }
      case 3 : {
        setCoords({ longitude: 19.079964, latitude: 47.492391 })
        break;
      }
      case 4 : {
        setCoords({ longitude: 19.087589, latitude: 47.499 })
        break;
      }
      default :{
        setCoords({ longitude: 19.077352, latitude: 47.4813 })
        break;
      }

    }
    
  }

  return (
    <div className="table">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Grid container>
        <Grid item lg={8}>
          <Grid container spacing={0}>
             <Grid item xs={5} sm={5} coord={{ longitude: 19.077352, latitude: 47.4813}} lg={3} onClick={handleClick} className="item">
               <MyCard className="card" distance={2362.0} name={ "TESCO Nyírbátor Hipermarket"}/> 
             </Grid>
             <Grid item xs={5} sm={5} lg={3} coord={{ longitude: 19.079964, latitude: 47.492391}} onClick={handleClick} className="item">
              <MyCard className="card" distance={2362.0} name={"TESCO Sarkad Szupermarket"}/> 
            </Grid>
             <Grid item xs={5} sm={5} lg={3} coord={{ longitude: 19.077448, latitude: 47.494665}} onClick={handleClick} className="item">
               <MyCard className="card" distance={2362.0} name={ "TESCO Gyula Hipermarket"}/> 
              </Grid>
             <Grid item xs={5} sm={5} lg={3} coord={{ longitude: 19.087589, latitude: 47.499}} onClick={handleClick} className="item">
               <MyCard className="card" distance={2362.0} name={"TESCO Soroksári úti Hipermarket"}/> 
              </Grid>
           </Grid>
         </Grid>
        <Grid item xs={12} lg={4}>
            <Map coords={coords}></Map>
        </Grid>

     </Grid>

     <div className="slider">
      <Typography className="textDistance" textAlignvariant="h1" component="h2" >
        Distance
      </Typography>
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        value={value}
        onChangeCommitted={e => setValue(Number(e.target.textContent))}
        step={100}
        marks
        min={10}
        max={6110}
      />
      </div>
      <FloatingButton hide={showItems}></FloatingButton>
    </div>
  );
}

export default Table;
