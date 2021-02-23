import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Spot.css";
import Booking from "../Booking/Booking"

export default function Spot() {
  let { id } = useParams();
  const numId = parseInt(id);
  const spots = useSelector((state) =>
  state.search.searchResults)
  const user = useSelector((state) => state.session.user);
let spot = spots.find((x) => x.id === numId);






  return (
    <div className="outer-single-div">
      <div id="individual-spot-main-container">
        <div id="individual-spot-main-photo-container">
          <img className="photo-slide" src={spot.imageURL}></img>
        </div>
        <Booking></Booking>
        <div id="under-box">
          <div className="single-spot-info-column">
            <p className="single-spot-name">{spot.name}</p>
            <p className="single-spot-address">
              {spot.street}, {spot.city}, {spot.state}, {spot.zipcode}{" "}
            </p>
            <span className="single-spot-occupancy">
              Occupancy: {spot.accomadate}
            </span>
            <div className="single-spot-description">
              <p>{spot.description}</p>
            </div>

            <br />
            <br />
            <div className="lastline">
              <br />
              <p className="single-spot-name">About The Neighborhood</p>
              <div className="single-spot-description">
                <span className="single-spot-description">{spot.overview}</span>
                <p></p>
              </div>
            </div>
            <div className="lastline">
              <br />
              <p className="single-spot-name">Rules For This Property</p>
              <div className="single-spot-description">
                <span className="single-spot-description">{spot.rules}</span>
                <p></p>
              </div>
            </div>

            <div className="lastline">
              <br />
              <p className="single-spot-name">Policies</p>
              <div className="single-spot-description">
                <span className="single-spot-occupancy"> Thinks to Know </span>
                <p>
                  {" "}
                  <i class="fas fa-check-circle"></i> Check-in: After 3:00 PM
                </p>
                <p>
                  {" "}
                  <i class="fas fa-check-circle"></i> Check-out:11:00 AM{" "}
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="lastline">
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
