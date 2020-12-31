import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Spots from "./components/Spots";
import Spot from "./components/Spot";
import LoginFormModal from "./components/LoginFormModal";
import SignUpModal from "./components/LoginFormModal";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/spots" >
            <Spots/>
          </Route>
           <Route path="/spot/:id" >
            <Spot/>
          </Route>
          <Route path="/login" >
            <LoginFormModal />
          </Route>
          <Route path="/signup">
            <SignUpModal />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
