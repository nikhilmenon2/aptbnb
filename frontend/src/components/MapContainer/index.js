import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import"./map.css"



const MapContainer = () => {

    const mapStyles = {
      height: "100%",
      width: "100%",
    };

    const defaultCenter = {
      lat: 37.7739,
      lng: -122.431297,
    };


  const [selected, setSelected] = useState({});

  const spots = useSelector((state) => state.spots);

  const dispatch = useDispatch();

  if (!spots){
    return null;
  }

  let myData = Object.keys(spots).map((key) => {
    return spots[key];
  });

console.log(myData)

 const onSelect = (spot) => {
   setSelected(spot);
 };


  return (
    <LoadScript googleMapsApiKey="AIzaSyBB_qz7gdLnQ9rBYBbQafFjWqx7gyIIJVI">
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        {myData.map((spot) => (
          <Marker
            key={spot.id}
            position={{
              lat: Number.parseFloat(spot.lat),
              lng: Number.parseFloat(spot.long),
            }}
            onClick={() => onSelect(spot)}
            label={`${spot.price}`}
          />
        ))}
        <InfoWindow
          position={{
            lat: Number.parseFloat(selected.lat),
            lng: Number.parseFloat(selected.long),
          }}
          clickable={true}
          onCloseClick={() => setSelected({})}
        >
            <div className="infowindow">
              <p>{selected.name}</p>
              <img
                src={selected.imageURL}
                className="small-image"
                alt="rental"
              />
              <p>price: {selected.price}</p>
              <p>bathroom: {selected.bathroom}</p>
              <p>bedrooms: {selected.bedroom}</p>
            </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
