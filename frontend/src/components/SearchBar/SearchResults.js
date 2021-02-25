import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { searchSpots, clearSearchInfo } from "../../store/search";
import SearchMap from "../MapContainer/index";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

import "./search.css"
function SearchResults() {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  let results = useSelector((state) => state.search.searchResults);
  let center = useSelector((state) => state.search.searchCenter);
  const history = useHistory();
  const locLoc = location.search.indexOf("location") + 9;
  const loc = location.search.slice(locLoc).split("%20").join(" ");

  useEffect(() => {
    (async () => {
      if (!location.search.includes("location")) {
        history.push(`/search/?location=`);
      } else {
        await dispatch(clearSearchInfo());
        await dispatch(searchSpots(loc));
      }
      setLoaded(true);
      
    })();
  }, [dispatch, loaded]);


  if (loaded) {
    return (
      <div id="results-wrapper">
        <SearchBar setLoaded={setLoaded} loaded={loaded} loc={loc} />

        <div id="search-parent-div">
          <div id="main-spots-div">
            <h1>Available Spots At This Location:</h1>
            {results &&
              results.map((spot, i) => (
                <>
                  <br />
                  <NavLink
                    to={`/spots/${spot.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="spot-listing-box">
                      <div className="picture-box">
                        <img className="spot-image" src={spot.imageURL}></img>
                      </div>
                      <div className="spot-details">
                        <ul>
                          <h3 className="spot-props">
                            {i + 1}.  {spot.name}
                          </h3>
                          <h3 className="spot-props-others">
                            Entire Apartment
                          </h3>
                          <h3 className="spot-props-others">
                            ${spot.price} per night
                          </h3>
                          <h3 className="spot-props-amenities">
                            {" "}
                            {spot.neighborhood}{" "}
                          </h3>
                        </ul>
                      </div>
                    </div>
                  </NavLink>
                </>
              ))}
          </div>
          <div id="main-content-wrapper"></div>
          <div id="google-map-container" className="search-results-map">
            <SearchMap center={center} spots={results} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default SearchResults;
