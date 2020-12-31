import "./index.css";
import picture from "./SF.jpg";
import Footer from '../Footer/index.js';


import {useSelector} from 'react-redux';

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
        <div id="home-page-container">
            <div>
                <img id="home-page-picture" src={picture} />
                    {/* <div id-logged>
                     {loggedInUser && <h3> Welcome {loggedInUser.username}, Let's Get You Booked For Your Next Home!</h3>}
                     </div>
                */}
            </div>
              <Footer/>
        </div>
    );
};

export default Home;