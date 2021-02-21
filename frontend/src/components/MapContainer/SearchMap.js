import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";
const SearchMap = ({ center, spots }) => {
  const [selected, setSelected] = useState({});

  let mapStyles = {
    height: "100%",
    width: "100%",
  };

  let defaultCenter = { lat: 32.779167, lng: -96.808891 };

  if (center) {
    defaultCenter = {
      lat: center.latitude,
      lng: center.longitude,
    };
  }

  const onSelect = (spot) => {
    setSelected(spot);
  };

  if (!center) {
    return null;
  }

  debugger;
  return (
    <LoadScript googleMapsApiKey="AIzaSyBB_qz7gdLnQ9rBYBbQafFjWqx7gyIIJVI">
      <GoogleMap mapContainerStyle={mapStyles} zoom={12} center={defaultCenter}>
        {spots &&
          spots.map((spot, ind) => {
            return (
              <Marker
                position={{ lat: Number(spot.lat), lng: Number(spot.long) }}
                key={ind}
                onClick={() => onSelect(spot)}
                label={`${ind + 1}`}
                icon={{
                  fontSize: "9px",
                  fontWeight: "bold",
                  color: "white",
                }}
              />
            );
          })}
        {/* Decide to keep windows */}
        {/* <InfoWindow
          position={{
            lat: Number.parseFloat(selected.lat),
            lng: Number.parseFloat(selected.long),
          }} */}
        {/* // clickable={true}
          onCloseClick={() => setSelected({})}
        >
          <div className="infowindow"> */}
        {/* <a href={`/spots/${selected.id}`}> */}
        {/* <p>{selected.name}</p>
              <img
                src={selected.imageURL}
                className="small-image"
                alt="rental"
              />
              <p>price: {selected.price}</p>
              <p>bathroom: {selected.bathroom}</p>
              <p>bedrooms: {selected.bedroom}</p> */}
        {/* </a> */}
        {/* </div>
        </InfoWindow> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default SearchMap;
