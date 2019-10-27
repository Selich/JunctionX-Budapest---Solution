import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "relative",
    background: "linear-gradient(to top, #ece9e6, #ffffff)",
    bottom: 0,
    height: "20px"
  },
  margin: {
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function Sliders() {
  const classes = useStyles();
  const [value, setValue] = useState()

  useEffect(() => {


  },[value])
  return (
    <div className="slider">
      <Typography  id="discrete-slider" gutterBottom>
        Distance
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        value={value}
        onChangeCommitted={e => setValue(Number(e.target.textContent))}
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
}