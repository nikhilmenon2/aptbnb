import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";
import { searchSpots, clearSearchInfo } from "../../store/search";


function SearchBar({ setLoaded, loaded, loc }) {
  const [searchLocation, setSearchLocation] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let vals = parse(location.search);
    if (vals.location) setSearchLocation(vals.location);
  }, []);

  const search = (event) => {
    if (event.keyCode === 13) {
      history.push(`/search/?location=${searchLocation}`);
      if (setLoaded) {
        setLoaded(false);
      }
    }
  };
  const searchClick = (event) => {
    history.push(`/search/?location=${searchLocation}`);
    if (setLoaded) {
      setLoaded(false);
    }
  };
  return (
    <>
      <div id="search-bars">
        <input
          id="search-location-bar"
          value={searchLocation}
          placeholder="Type Your Location Ex. San Francisco"
          onChange={(e) => setSearchLocation(e.target.value)}
          onKeyUp={search}
        />
        <i
          id="search-icon"
          className="fas fa-search fa-lg"
          onClick={searchClick}
        ></i>
      </div>
    </>
  );
}

export default SearchBar;
