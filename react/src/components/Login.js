import React, {useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import Map from './Map'
import '../App.css'

import {
    Input , TextField, Grid,Button, Typography
} from '@material-ui/core'


function Login() {


  const[data, setData] = useState({
      name: '',
      password: '',

  })
  const [coords, setCoords] = useState({ latitude: 47.5, longitude: 19});

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };
  const handleConfirm = e => {
    localStorage.setItem("coords",  JSON.stringify(coords))

  }
  return (
    <div className="Main-register" >
    <Grid container>
    <form noValidate autoComplete="off" className="Login">
      <Grid item xs={4}>
      <TextField
        placeholder="Enter name"
        id="standard-name"
        label="Name"
        defaultValue="name"
        value={data.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
      <TextField
        placeholder="Enter password"
        id="standard-password"
        type="password"
        label="password"
        defaultValue="password"
        value={data.password}
        onChange={handleChange('password')}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
      <Button onClick={handleConfirm}>Accept</Button>
      </Grid>
      </form>
      </Grid>
    </div>
  );
}

export default Login;