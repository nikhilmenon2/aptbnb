import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {getSpots} from '../../store/spot'
import MapContainer from "../MapContainer";
import './Spots.css'


function Spots() {

    const[search,setSearch] = useState("")

    const spots = useSelector(
        (state) => state.spots
    )
    const dispatch = useDispatch()
       
    console.log(spots)
    
    
        useEffect(() => {
        dispatch (
            getSpots()
        )
        },[dispatch])



const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
}

// if(search.length > 0){
//     var spots = spots.filter((i) =>{
//         return i.name.match(search)
//     })
// }


    return (
    <div>
        <input type="text" placeholder="Search Here" onChange={handleChange} value={search}>
        </input>
        <div>
            { spots && spots.map(spot => 
            <>
            <br/>
            <NavLink to={`/spot/${spot.id}`}>
            {/* <div className="spot-listing-box"  >
                <h1>{spot.name}</h1>
                <img className="spot-image" src={spot.Images[1].image_url}></img>
                <div>
                </div>
            </div>   */}
                <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <p>{spot.city}</p>
                    <h3>{spot.name}</h3>
                    <p>{spot.description}</p>
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