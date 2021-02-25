import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import GuestNum from "../GuestNum/GuestNum";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useParams, useHistory } from "react-router-dom";
import { fetch } from "../../store/csrf";
import "./Booking.css";
import LoginModal from '../Confirmation/Login'
function Booking() {
  let { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [people, setPeople] = useState({});
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const makeReservation = (e) => {
    e.preventDefault();

    if (user) {
      fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guest_num: people.value,
          startDate: startDate,
          endDate: endDate,
          userId: user.id,
          spotId: id,
        }),
      });
      return <h1>There are no reviews for this business yet!</h1>;
    } else {
    setShowModal(true)   
   }
  };

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
      />
      <h2>Select Number Of Guest Below</h2>
      <GuestNum people={people} setPeople={setPeople} />
      <br></br>
      <button className="nav-link" onClick={makeReservation}>
        Make Booking
      </button>
      {showModal && <LoginModal setShowModal={setShowModal}/>}
    </div>
  );
}
export default Booking;
