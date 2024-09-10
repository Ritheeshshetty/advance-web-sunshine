import React, { useState, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(20);
  let navigate = useNavigate();
  const handleClick = () => {
    if (menu === 250) {
      setMenu(20);
    } else {
      setMenu(250);
    }
  };
  useEffect(() => {
    console.log("");
    if (!localStorage.getItem("token")|| location.pathname==='/signup') {
      navigate("/");
    }
  }, [navigate]);

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
        {/* <li className="search">
          <input type="text" alt="search" />
        </li> */}
      </div>
      <nav className="navbar" style={{ minWidth: `${menu}px` }}>
        <ul>
          <button className="menu" onClick={handleClick}>
            {menu === 250 ? (
              <i className="fa-solid fa-xmark fa-xl"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xl"></i>
            )}
          </button>
          {menu === 250 ? (
            <li>
              <Link to="/home">
                <i className="fa-solid fa-house">
                  &nbsp; home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/home">
                <i className="fa-solid fa-house fa-xl"></i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/about">
                <i className="fa-regular fa-solid fa-paper-plane"> about us</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/about">
                <i className="fa-regular fa-paper-plane fa-xl"></i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/contact">
                <i className="fa-regular fa-solid fa-envelope"> contact</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/contact">
                <i className="fa-regular fa-envelope fa-xl"> </i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/setings">
                <i className="fa-solid fa-gear"> account</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/settings">
                <i className="fa-solid fa-gear fa-xl"></i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <ul>
              <li>
                <h1>Headlines</h1>
              </li>
              <li>hello</li>{" "}
            </ul>
          ) : (
            <span></span>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
