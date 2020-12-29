import "./index.css"
import picture from "./SF.jpg"
// import {useSelector} from 'react-redux'

const Home = () => {

    // const fullState = const state = useSelector(state => {
    //     console.log(state)
    //     return state;
    // })


    return (
        <div>
        <div id="home-page-container"> 
        <h1> Welcome to AptBnB</h1>
        <img src={picture} />
        <div id="home-page-overlay" >
             </div>
        </div>
        </div>
    )
}


export default Home;