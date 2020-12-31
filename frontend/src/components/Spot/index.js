import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import './Spot.css'

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
        <div id='individual-spot-main-container'>
            <div id='individual-spot-main-photo-container'>
            <img className='photo-slide' src={spots.Images[0].image_url}></img>
            <img className='photo-slide' src={spots.Images[1].image_url}></img>
            <img className='photo-slide' src={spots.Images[2].image_url}></img>
            </div>
            <div id='under-box'>
            <div id='info-box'>
            <h1> {spots && spots.name}</h1>
            </div>
            </div>
          {/* <h1> {spots && spots.name}</h1>
          <h6>{spots && spots.address}</h6>
            <h6>{spots && spots.city}</h6>
            <h6>{spots && spots.state}</h6>
          <h4> {spots && spots.description}</h4> */}


        </div>
        </div>
    )
}
