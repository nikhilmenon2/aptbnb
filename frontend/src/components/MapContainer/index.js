import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useSelector} from 'react-redux'



const MapContainer = () => {
  
  const spots = useSelector(
        (state) => state.spots
    )



  const mapStyles = {        
    height: "50vh",
    width: "35%"};
  
  const defaultCenter = {
    lat: 37.7739, lng: -122.431297
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBB_qz7gdLnQ9rBYBbQafFjWqx7gyIIJVI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {spots.map(spot => 
          <Marker position={{lat: Number.parseFloat(spot.latitude), lng: Number.parseFloat(spot.longitude)}}/>
            )}
            {/* {<Marker position={defaultCenter}/>} */}
           
       </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;