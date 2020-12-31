import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import picture from "./logo.png";


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
      </>
    );
  }

  return (
    <div id="top-nav-bar">
     <img id="nav-bar-logo-picture" src={picture} />

      <div id="nav-bar-center">
        <h2 id="nav-bar-greeting">Welcome to AptBnB</h2>
      </div>
      <div id="nav-bar-menu">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
         <NavLink className="nav-link" exact to="/spots">Spots</NavLink>
      </div>
    </div>
  );
}

export default Navigation;