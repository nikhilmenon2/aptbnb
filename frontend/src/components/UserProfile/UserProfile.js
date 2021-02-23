import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../Footer/index";


function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);


 const userprofile = useSelector((state) => state.session.user);


  return (
    <>
      <div id="profileparent">
        <div id="user-profile-container">
          <div id="img-box">
            <img className="profile-img" src={userprofile.profileImg} />
          </div>
          <div id="user-info-box">
            <div id="user-info-text">
              <h3>{`${userprofile.firstName} ${userprofile.lastName}`}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default User;
