import "./index.css";
import picture from "./SF.jpg";

import {useSelector} from 'react-redux';

const Home = () => {

    const loggedInUser = useSelector(state => {
        return state.session.user;
    });
    
    return (
        <div>
            <div id="home-page-container">
                <img src={picture} />
                <div id="home-page-overlay">
                    <div>
                     {loggedInUser && <h3> Welcome {loggedInUser.username}, Let's Get You Booked For Your Next Home!</h3>}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Home;