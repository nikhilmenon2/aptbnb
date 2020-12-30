import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSpots} from '../../store/spot'
import MapContainer from "../MapContainer";



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

const result = Object.values(spots)
console.log(result)

    return (
    <>
        <div>
            { result.map(spot => 
            <div>
                <h1>{spot.name}</h1>
                <h2>{spot.Images[1].image_url}</h2>
            </div>  
                )}
        </div>
        <div id='google-map-container'>
            <MapContainer></MapContainer>
        </div>

     </>
    )
}

export default Spots;