import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "../App.css"

function Map({ coords }) {

var def = {
    width: 560,
    height: 1000,
    latitude: 47,
    longitude: 19,
    zoom: 16,
    mapboxApiAccessToken:
      "pk.eyJ1Ijoic2VsaWNoIiwiYSI6ImNrMjgzZ3VjODBmdmUzbW9iOXE5Nzk0bTMifQ.kOPAvHggNLYJXh2Q0cgzWA"
};
 const [viewport,setViewport] = useState(def)


 useEffect(() => {
    viewport.latitude = coords.latitude
    viewport.longitude = coords.longitude
    setViewport(viewport)
 }, [coords,viewport])

  return (
    <ReactMapGL
    className="map"
      {...viewport}
   onViewportChange={viewport => {
        setViewport(viewport)
   }}
    />
  );
}
export default Map;
