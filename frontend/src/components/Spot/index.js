import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
export default function Spot() {
    let {id} = useParams()
    const numId = parseInt(id)
    const spots = useSelector(
        (state) => state.spots.find(el => {
    console.log(el.id,numId)
    return el.id === numId
    
})
    )

        console.log(spots)


    
    return (
        <div>
           {spots && spots.name}
            <h1>Hello</h1>
        </div>
    )
}
