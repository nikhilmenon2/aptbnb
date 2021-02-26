import React, { useState } from "react";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import "./Review.css";
import { useParams, useHistory } from "react-router-dom";
import { fetch } from "../../store/csrf";
import { toast } from "react-toastify";

export default function WriteReview() {
  let { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  let reviewId;
  const [overall, setOverall] = useState("");
  const [review, setReview] = useState("");

  const setReviewWrapper = (e) => {
    setReview(e.target.value);
  };

  const postReview = (e) => {
    e.preventDefault();
    const postReviewHere = async () => {
      await fetch(`/api/reviews/${id}/${user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          overall: overall,
          review: review,
          userId: user.id,
          spotId: id,
        }),
      });
    };
    postReviewHere();
    toast.success("Review Submitted");
  };

  return (
    <div id="writereview_container">
      <ReactStars
        count={5}
        value={overall}
        onChange={setOverall}
        size={18}
        half={false}
        color2={"#ff0000"}
      />
      <textarea
        id="writereview_textarea"
        placeholder={"Please Comment Here"}
        value={review}
        onChange={setReviewWrapper}
      ></textarea>
      <button id="writereview_post" onClick={postReview}>
        Post Your Review!
      </button>
    </div>
  );
}
