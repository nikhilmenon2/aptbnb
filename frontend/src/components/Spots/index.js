import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSpots} from '../../store/spot'


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

    return (
        <div>
            { spots.map(spot => 
            <h1>{spot.name}</h1>    
                )}
        </div>
    )
}

export default Spots;
