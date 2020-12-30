import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSpots} from '../../store/spot'
import MapContainer from "../MapContainer";
import './Spots.css'



function Spots() {
    const spots = useSelector(
        (state) => state.spots
    )
    const dispatch = useDispatch()
  
useEffect(() => {
  dispatch (
      getSpots()
  )
},[dispatch])


// [{long:1,lat:2}]


    return (
    <>
        <div>
            { spots.map(spot => 
            <>
            <br/>
            <div className="spot-listing-box" >
                <h1>{spot.name}</h1>
                <img id="spot-image" src={spot.Images[1].image_url}></img>
            </div>  
            </>
                )}
        </div>
        <div id='google-map-container'>
            <MapContainer></MapContainer>
        </div>

     </>
    )
}

export default Spots;