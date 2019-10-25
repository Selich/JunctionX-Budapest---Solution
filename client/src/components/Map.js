import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

// Google map component
const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `91vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{
        lat: 55.676098,
        lng: 12.568337
      }}
    >
      {props.markers.map(marker => (
        // Plot markers on the google map
        <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          onClick={() => setSelectedMarker(marker)}
        >
          {/* Add info window to each marker */}
          {marker === selectedMarker && (
            <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
              <div>
                <div>{selectedMarker.name}</div>
                <div>{selectedMarker.visitingAddress}</div>
                <div>{selectedMarker.visitingPostalCode}</div>
                <div>{selectedMarker.visitingCity}</div>
                {/* Add select button to each info window */}
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ marginTop: "10px" }}
                  onClick={() =>
                    alert("You have successfully selected your pickup point")
                  }
                >
                  Select
                </Button>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
});

export default Map;