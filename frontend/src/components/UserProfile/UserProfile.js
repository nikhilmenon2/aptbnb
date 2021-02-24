import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/index";
import "./UserProfile.css";


function User() {
    const [user, setUser] = useState({});
      const { userId } = useParams();

      useEffect(() => {
        (async () => {
          const response = await fetch(`/api/users/${userId}`);
          const user = await response.json();
          setUser(user);
        })();
      }, [userId]);

 
 
// const userp = useSelector((state) => state.session.user);

 console.log(user)

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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default User;