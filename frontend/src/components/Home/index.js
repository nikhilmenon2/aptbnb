import "./index.css";
import picture from "./SF.jpg";
import Footer from "../Footer"
import SearchBar from "../SearchBar/SearchBar.js";
import {useSelector} from 'react-redux';

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
      <div id="home-page-container">
        <div id="home-image-container">
          <img id="home-page-picture" src={picture} />
          <div id="home-page-overlay">
            <p id="searchp"> Search For Your Dream Apartment Today</p>
            <SearchBar />
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Home;