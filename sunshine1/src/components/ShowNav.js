import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNav = ({ children }) => {
  const location = useLocation();
 
  const [ShowNav, setShowNav] = useState(false);

  useEffect(() => {
    console.log(location)
    if (location.pathname === "/" ||location.pathname==='/login') {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
  },[location]);

  

  return <>{ShowNav && children}</>;
};

export default ShowNav;
