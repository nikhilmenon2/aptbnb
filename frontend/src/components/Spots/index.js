import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {getSpots} from '../../store/spot'
import MapContainer from "../MapContainer";
// import './Spots.css'


function Spots() {

    const[search,setSearch] = useState("")

    const spots = useSelector(
        (state) => state.spots
    )
    const dispatch = useDispatch()
       
    
    
        useEffect(() => {
        dispatch (
            getSpots()
        )
        },[dispatch])




  var myData = Object.keys(spots).map((key) => {
    return spots[key];
  });
    return (
    <div id="main-div">
        <div id='main-spots-div'>
            { myData.map(spot => 
            <>
            <br/>
                <NavLink to={`/spots/${spot.id}`} style={{ textDecoration: 'none' }}>
                    <div className="spot-listing-box"  >
                        <div className='picture-box'>
                             <img className="spot-image" src={spot.imageURL}></img>
                        </div>
                             <div className='spot-details'>
                                <ul>
                                     <h3 className='spot-props'>{spot.name}</h3>
                                      <h3 className='spot-props-others'>Entire Apartment</h3>
                                     <h3 className='spot-props-others'>${spot.price} per night</h3>
                                      <h3 className='spot-props-amenities'> {spot.neighborhood} </h3>
                                </ul> 
                          
                             </div>
                            
                    </div>  
            
                
                </NavLink>
            </>
                )}
        </div>
        <div id='google-map-container'>
            <MapContainer></MapContainer>
        </div>

     </div>
    )
}

export default Spots;