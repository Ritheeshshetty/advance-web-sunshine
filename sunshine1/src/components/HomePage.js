import React from "react";
import { Link } from "react-router-dom";
// import {Homeimg} from '../assets/landing.png'
// import {Homeimg} from '../../public/'

function HomePage() {
 
  return <div className="homepage">
    <div className="homeimg"><img src="../../landing.png" alt="" style={{height:"700px",width:"800px"}}/></div>
    {/* <h1>HomePage</h1> */}
    <div className="hometext">
      <h3>Stay informed, stay ahead. Sunshine Express brings the world to your fingertips with the latest news, delivered fast and accurate. Your gateway to knowledge, one article at a time.</h3>
   <br /> <Link to="/login" className="link">See Headlines</Link>
    </div>
  </div>
}

export default HomePage;
