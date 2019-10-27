import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Typist from "react-typist";
import AnimakitRotator from "animakit-rotator";

import "../App.css";
import { makeStyles, withStyles } from "@material-ui/styles";

import { Typography, Button } from "@material-ui/core";

const HomeButton = withStyles(theme => ({
  root: {
    textTransform: "upper",
    textAlign: "center",
    fontSize: 19,
    transition: 1.4,
    minWidth: 120,
    color: "black",
    backgroundColor: "#FFF",
    boxShadow: "0 0 5px black",
    opacity: 0.7,
    "&:hover": {
      backgroundColor: "#FFF",
      color: "#000",
      opacity: 1,
      transition: 1.4,
    },
    "&$selected": {
      color: "#fff",
      opacity: 0.7
    },
    "&:focus": {
      color: "#fff",
      opacity: 0.7
    }
  },
  selected: {}
}))(props => <Button disableRipple {...props} />);

function Home() {
  const [data, setData] = useState({
    name: "Default",
    password: "pass"
  });
  const [loading, setLoading] = useState(false)

  const [text, setText] = useState(false);
  useEffect(() => {}, [text]);

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };
  return (
    <>
      <header className="App-header">
        <div>
          <Typography className="textHeader" textAlignvariant="h1" component="h1" >
            <Typist
              className="typing"
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: false,
                hideWhenDoneDelay: 2000
              }}
              onTypingDone={() => setText(true)}
            >
              Need a helping hand?
            </Typist>
          </Typography>
        </div>
        {text && (
          <AnimakitRotator side={(loading) ? "loading" : "button" }>
            <HomeButton 
            component={Link} to="/table"
            className="startButton" onClick={() => setLoading(true)}hidden={!text}>
              Find out more
            </HomeButton>
          </AnimakitRotator>
        )}
      </header>
    </>
  );
}

export default Home;
