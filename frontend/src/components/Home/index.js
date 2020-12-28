import "./index.css"
import picture from "./Big-Sur-Road.png"
import {useSelector} from 'react-redux'

const Home = () => {

    // const fullState = const state = useSelector(state => {
    //     console.log(state)
    //     return state;
    // })


    return (
        <div>
        <div id="home-page-container"> 
        {/* <img src={picture} /> */}
        <div id="home-page-overlay" >
            <h1> Welcome to AptBnB</h1>
             </div>
        </div>
        </div>
    )
}


export default Home;