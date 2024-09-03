import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="category">
        <li>
          <Link to="/business">business</Link>
        </li>
        <li>
          <Link to="/entertainment">entertainment</Link>
        </li>
        <li>
          <Link to="/general">general</Link>
        </li>
        <li>
          <Link to="/health">health</Link>
        </li>
        <li>
          <Link to="/science">science</Link>
        </li>
        <li>
          <Link to="/sports">sports</Link>
        </li>
        <li>
          <Link to="/technology">technology</Link>
        </li>
        <li className="search">
          <input type="text" alt="search"/>
        </li>
      </div>
      {/* <nav className='navbar'>
  <ul>
    <li><Link  to="/home">Home</Link></li>
    <li><Link  to="/about">About</Link></li>
    <li><Link  to="/contact">Contact</Link></li>
    <li><Link  to="/login">Login</Link></li>
    </ul>
    </nav> */}
      {/* <li><div className="dropdown">
            <button className="dropbtn">
                <span>categories</span>
                <span className="icon">&#9759;</span>
            </button>
            <div className="dropdown-content mar-t-1">
              <Link to="/business">business</Link>
              <Link to="/entertainment">entertainment</Link>
              <Link to="/general">general</Link>
              <Link to="/health">health</Link>
              <Link to="/science">science</Link>
              <Link to="/sports">sports</Link>
              <Link to="/technology">technology</Link>
            </div>
        </div>
        </li> */}
      {/* </ul> */}
      {/* </nav> */}
    </div>
  );
};

export default NavBar;
