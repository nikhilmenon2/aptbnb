import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
       <div className="footer-container">
        <div className="footer">
          <p>2020 AptBnb, a clone of Airbnb.com </p>
            <div>
              <a href="https://www.linkedin.com/in/nickmenon/" target="_blank">LinkedIn</a>|
              <a href="https://github.com/nikhilmenon2/airbnbclone" target="_blank">GitHub</a>
            </div>
        </div>
      </div>
    )
}

export default Footer
