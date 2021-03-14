import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/index";
import "./UserProfile.css";
import Moment from "moment";

function User() {
  const [user, setUser] = useState({});
  const [spot, setSpots] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

    useEffect(() => {
      (async () => {
        const response = await fetch(`/api/spots`);
        const spots = await response.json();
        setSpots(spots);
      })();
    }, [userId]);

  console.log(user);
  console.log(spot);
  const array = user.Bookings;
  console.log(array);

  if (!array) {
    return null;
  }

  const bookinginfo = array.map((i) => {
    const startDate = Moment(i.startDate).format("MMM Do YYYY");
    const endDate = Moment(i.endDate).format("MMM Do YYYY");
    

    
    return (
      <div className="bookingcard">
        <div>Booking # {i.id} </div>
        <br></br>
        <div>Guest Number: {i.guest_num} </div>
        <div>
          {startDate} - {endDate}
        </div>
        <div>Location Id: {i.spotId}</div>
        <br></br>
      </div>
    );
  });

  return (
    <>
      <div id="profileparent">
        <div id="user-profile-container">
          <div id="img-box">
            <img className="profile-img" src={user.profileImg} />
          </div>
          <div id="user-info-box">
            <div id="user-info-text">
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
            </div>
          </div>
          <h1>Confirmed Bookings</h1>
          <div id="booking-parent">{bookinginfo}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default User;
