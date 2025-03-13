// import React, { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import UserContext from "../context/userData/UserContext";

// const PrivateRoute = () => {
//   const { currentUser } = useContext(UserContext);

//   // Redirect if user is NOT an admin
//   if (!currentUser || !currentUser.isAdmin) {
//     return <Navigate to="/general" replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
// import React, { useContext, useEffect } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import UserContext from "../context/userData/UserContext";

// const PrivateRoute = () => {
//   const { currentUser, fetchCurrentUser } = useContext(UserContext);

//   useEffect(() => {
//     fetchCurrentUser(); // Ensure user data is up-to-date
//   }, []);

//   console.log("Current User:", currentUser); // Debugging line

//   if (!currentUser) {
//     return <p>Loading...</p>; // Prevents flicker before redirect
//   }

//   if (!currentUser.isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/userData/UserContext";

const PrivateRoute = () => {
  const { currentUser } = useContext(UserContext);

  // ✅ Ensure `currentUser` is loaded before checking permissions
  if (currentUser === null) {
    return <div>Loading...</div>; // 🔄 Show loading until user data is fetched
  }

  // ✅ Redirect non-admin users
  if (!currentUser.isAdmin) {
    return <Navigate to="/general" replace />;
  }
  

  return <Outlet />;
};

export default PrivateRoute;
