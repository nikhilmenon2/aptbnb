import React from "react";
import DatePicker from "react-date-picker";
import "../Home/Home.css";
function CalendarContainer({ value, onChange }) {

    
  return <DatePicker onChange={onChange} value={value} />;
}

export default CalendarContainer;
