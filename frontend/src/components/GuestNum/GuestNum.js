import React, {  useState } from "react";
import Select from "react-select";

const options = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guest" },
  { value: "3", label: "3 Guest" },
  { value: "4", label: "4 Guest" },
  { value: "5", label: "5 Guest" },
  { value: "6", label: "6 Guest" },
  { value: "7", label: "7 Guest" },
];

function GuestNum() {
   const[guest, setGuest] = useState({})

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

  if (!guest || guest.label === "defaulted") {
    guest = "";
  }

  return (
    <div id="guestdropdown">
      <Select
        styles={customStyles}
        id="select-guest-drop"
        value={guest}
        options={options}
        placeholder="Select Number Of Guests"
        onChange={setGuest}
      />
    </div>
  );
}

export default GuestNum;
