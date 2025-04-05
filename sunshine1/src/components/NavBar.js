import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuBar = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      window.location.pathname === "/signup"
    ) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
        {/* <li className="logout">
          <button onClick={handleLogout}>
            <Link to="/login">
              LogOut <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </button>
        </li> */}

        {/* 🔹 Menu Toggle Icon (Bars → X) */}
        <li className="menu-bar">
          <i
            className={`fa-solid ${
              menuOpen ? "fa-circle-xmark" : "fa-bars"
            } fa-xl`}
            onClick={menuBar}
          ></i>
        </li>
      </div>

      {/* 🔹 Side Menu for Home, Settings, Dashboard */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/general" onClick={menuBar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={menuBar}>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/admin" onClick={menuBar}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

// import React, { useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// const NavBar = () => {
//   const location = useLocation();
//   let navigate = useNavigate();

//   const modal = document.querySelector("#modal");

//   const menuBar = () => {
//     modal.showModal();
//   };

//   useEffect(() => {
//     console.log("");

//     if (!localStorage.getItem("token") || location.pathname === "/signup") {
//       navigate("/");
//     } // eslint-disable-next-line
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div>
//       <div className="category">
//         <li>
//           <Link to="/business">business</Link>
//         </li>
//         <li>
//           <Link to="/entertainment">entertainment</Link>
//         </li>
//         <li>
//           <Link to="/general">general</Link>
//         </li>
//         <li>
//           <Link to="/health">health</Link>
//         </li>
//         <li>
//           <Link to="/science">science</Link>
//         </li>
//         <li>
//           <Link to="/sports">sports</Link>
//         </li>
//         <li>
//           <Link to="/technology">technology</Link>
//         </li>
//         <li className="logout">
//           <button onClick={handleLogout}>
//             <Link to="/login">
//               LogOut <i className="fa-solid fa-right-from-bracket"></i>
//             </Link>
//           </button>
//         </li>
//         <li className="menu-bar">
//         <i class="fa-solid fa-bars fa-xl" onClick={menuBar}></i>
//         </li>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

// ************************************************************//

// const [menu, setMenu] = useState(20);
// const [menuItems, setMenuItems] = useState("");
// const handleClick = () => {
//   if (menu === 250) {
//     setMenu(20);
//   } else {
//     setMenu(250);
//   }
// };

{
  /* <nav className="navbar" style={{ minWidth: `${menu}px` }}>
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
</nav> */
}

{
  /* <i class="fa-solid fa-bars fa-xl" onClick={menuBar}></i>
          <dialog className="modal" id="modal">
            <Link to="/settings">Settings</Link>
          </dialog> */
}

// ******************************************************//
