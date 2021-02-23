import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpModal from "../SignUpModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import picture from "./logo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(
      sessionActions.login({ credential: "demo@aa.io", password: "password" })
    );
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className="nav-link" onClick={logout}>
          Log Out
        </div>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className="nav-link" onClick={demoLogin}>
          Demo
        </div>
        <LoginFormModal />
        <SignUpModal />
      </>
    );
  }

  return (
    <div id="top-nav-bar">
      <NavLink exact to="/">
        <img id="nav-bar-logo-picture" src={picture} />
      </NavLink>
      <div id="nav-bar-center"></div>
      <div id="nav-bar-menu">
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
