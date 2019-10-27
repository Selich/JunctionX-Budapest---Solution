import React, {useState,useEffect} from 'react';
import '../App.css'

import {
    Input , TextField, Grid
} from '@material-ui/core'


function Search() {

  const[data, setData] = useState({
      name: 'Default',
      password: 'pass',
  })

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };
  return (
    <div className="Main-register" >
    <form noValidate autoComplete="off" className="Login">
    <Grid container spacing={3}>
      <Grid item xs={4}>
      <TextField
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
        id="standard-password"
        label="password"
        defaultValue="password"
        value={data.password}
        onChange={handleChange('name')}
        margin="normal"
      />
      </Grid>
    </Grid>
      </form>
    </div>
  );
}

export default Search;
