import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Spots from "./components/Spots/index";
import Spot from "./components/Spot/index";
import LoginFormModal from "./components/LoginFormModal";
import SignUpModal from "./components/LoginFormModal";
import SearchResults from "./components/SearchBar/SearchResults";
import UserProfile from "./components/UserProfile/UserProfile"
import ThankYouMessage from "./components/ThankYouMessage/ThankYouMessage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

 const loggedInUser = useSelector((reduxState) => {
      return reduxState.session.user;
    });
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/spots">
            <Spots />
          </Route>
          <Route exact path="/spots/:id">
            <Spot />
          </Route>
          <Route exact path="/users/:userId">
            <UserProfile />
          </Route>
          <Route path="/login">
            <LoginFormModal />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route path="/signup">
            <SignUpModal />
          </Route>
          <Route path="/thankyou">
        <ThankYouMessage/> 
         </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
