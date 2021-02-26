import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import "./Spot.css";
import Booking from "../Booking/Booking";
import Review from "../Review/Review";
import ReactStars from "react-stars";
import Footer from "../Footer";
import { fetch } from "../../store/csrf";
import { toast } from "react-toastify";

export default function Spot() {
  let { id } = useParams();
  const [review, setReview] = useState({});
  const user = useSelector((state) => state.session.user);
  const numId = parseInt(id);
  const spots = useSelector((state) => state.search.searchResults);
  let spot = spots.find((x) => x.id === numId);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/reviews/${id}`);
      setReview(response.data);
    })();
  }, [id]);

  const reviewData = Object.keys(review).map((key) => {
    return review[key];
  });

  if (user) {
    var reviewcomp = reviewData.map((reviewmap) => {
      const deleteReview = (e) => {
        e.preventDefault();
        fetch(`/api/users/reviews/${reviewmap.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.success("Review Deleted");
      };
      return (
        <div>
          <div className="reviewbox" key={reviewmap.id}>
            <NavLink to={`/users/${reviewmap.userId}`}>
              <ReactStars
                count={5}
                size={20}
                value={reviewmap.overall}
                edit={false}
                activeColor="#ff0000"
              />
              <img
                className="picture-user"
                src={reviewmap.User.profileImg}
              ></img>
            </NavLink>
            <div className="review-comment">"{reviewmap.review}"</div>
          </div>
          {user.id === reviewmap.userId && (
            <button id="reviewdelete" onClick={deleteReview}>
              Delete
            </button>
          )}
        </div>
      );
    });
  } else {
    var reviewcomp = reviewData.map((reviewmap) => {
      return (
        <div className="reviewbox" key={reviewmap.id}>
          <NavLink to={`/users/${reviewmap.userId}`}>
            <ReactStars
              count={5}
              size={24}
              value={reviewmap.overall}
              edit={false}
              activeColor="#ff0000"
            />
            <img className="picture-user" src={reviewmap.User.profileImg}></img>
          </NavLink>
          <div className="review-comment">"{reviewmap.review}"</div>
        </div>
      );
    });
  }

  return (
    <div className="outer-single-div">
      <div id="individual-spot-main-container">
        <div id="individual-spot-main-photo-container">
          <img className="photo-slide" src={spot.imageURL}></img>
        </div>
        <p className="single-spot-name">Booking</p>
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
            <div id="review-section">
              <div id="filler-div"></div>
              <div>
                <p className="single-spot-name">Reviews</p>
                <div id="review-parent-div">{reviewcomp}</div>
              </div>
            </div>
            {user && <Review></Review>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
