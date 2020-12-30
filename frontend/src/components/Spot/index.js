import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
export default function Spot() {
    let {id} = useParams()
    
    const spots = useSelector(
        (state) => state.spots
    )

        console.log(spots)
    
    
    return (
        <div>
            {id}
            <h1>Hello</h1>
        </div>
    )
}
