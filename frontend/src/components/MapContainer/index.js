import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "35%"};
  
  const defaultCenter = {
    lat: 32.7767, lng: -96.808891
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBB_qz7gdLnQ9rBYBbQafFjWqx7gyIIJVI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;