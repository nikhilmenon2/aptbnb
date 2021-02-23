import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "6", label: "6 Guests" },
  { value: "7", label: "7 Guests" },
];

function GuestNum({people, setPeople}) {

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid black",
      padding: 20,
    }),
    valueContainer: () => ({
      // none of react-select's styles are passed to <Control />
      width: 110,
      height: 25,
      borderRadius: 5,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div id="guestdropdown">
      <Select
        styles={customStyles}
        id="select-guest-drop"
        value={people}
        options={options}
        placeholder="Select Number Of Guests"
        onChange={setPeople}
      />
    </div>
  );
}

export default GuestNum;
