import React, {useState,useEffect} from 'react';

import {
    Input , TextField
} from '@material-ui/core'


function NearBy() {

  const[data, setData] = useState({
      name: 'Default',
      password: 'pass',
  })

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };
  return (
    <>
    <form  noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        defaultValue="name"
        value={data.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="standard-password"
        label="password"
        defaultValue="password"
        value={data.password}
        onChange={handleChange('name')}
        margin="normal"
      />
      </form>
    </>
  );
}

export default NearBy;