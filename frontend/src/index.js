import React from 'react';
import {
  LoadScript

} from "@react-google-maps/api";
import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import App from './App';

import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';
import * as sessionActions from './store/session';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

// const Carrot = () => (
//   <div style={{ color: "orange", fontSize: "100px" }}>
//     <i className="fas fa-carrot"></i>
//   </div>
// );

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function Root() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <ModalProvider>
        <ToastContainer/>
        <Provider store={store}>
          <BrowserRouter>
            <App />
            {/* <Carrot /> */}
          </BrowserRouter>
        </Provider>
      </ModalProvider>
    </LoadScript>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
