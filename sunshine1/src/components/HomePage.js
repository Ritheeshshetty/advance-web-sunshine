import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
 
  return <div className="homepage">
    <h1>HomePage</h1>
    <Link to="/login">See Headlines</Link>
  </div>;
}

export default HomePage;
