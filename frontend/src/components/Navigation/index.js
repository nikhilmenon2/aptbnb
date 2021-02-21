import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpModal from '../SignUpModal';
import SearchBar from '../SearchBar/SearchBar'

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
        <SignUpModal/>
      </>
    );
  }

  return (
    <div id="top-nav-bar">
      <NavLink exact to="/">
        <img id="nav-bar-logo-picture" src={picture} />
      </NavLink>
      <div id="nav-bar-center">
      </div>
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