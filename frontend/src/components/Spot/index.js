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
        <div className='outer-single-div'>
            <div id='individual-spot-main-container'>
                <div id='individual-spot-main-photo-container'>
                    <img className='photo-slide' src={spots.Images[0].image_url}></img>
                    <img className='photo-slide' src={spots.Images[1].image_url}></img>
                    <img className='photo-slide' src={spots.Images[2].image_url}></img>
                </div>
                <div id="under-box">
                <div className="single-spot-info-column">
                    <p className="single-spot-name">{spots && spots.name}</p>
                    <p className="single-spot-address">{spots && spots.street}, {spots && spots.city}, {spots && spots.state}, {spots && spots.zipcode} </p>
                    <span className="single-spot-occupancy">Occupancy: {spots && spots.occupancy}
                    </span>
                <div className="single-spot-description">
                    <p>{spots && spots.description}</p>
                </div>
                
                <br/><br/>
                
                <div className="lastline">
                    <br/>
                    <p className="single-spot-name">Policies</p>
                    <div className="single-spot-description">
                        <span className="single-spot-occupancy"> Thinks to Know </span>
                        <p> <i class="fas fa-smoking-ban"></i> No smoking, parties, or events </p>
                        <p> <i class="fas fa-dog"></i> Pets Are Always Allowed </p>
                        <p> <i class="fas fa-check-circle"></i> Check-in: After 3:00 PM</p>
                        <p> <i class="fas fa-check-circle"></i> Check-out:11:00 AM </p>

                    </div>      
                </div>
                <br/><br/>
                <div className="lastline">
                    <br/>
  
                </div>
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
