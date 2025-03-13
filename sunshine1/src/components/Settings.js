import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userData/UserContext";

function Settings() {
  const navigate = useNavigate();
  const { currentUser, fetchCurrentUser } = useContext(UserContext);

  useEffect(() => {
    fetchCurrentUser(); // Fetch logged-in user details on component mount
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Clear user ID on logout
    navigate('/login');
  };

  return (
    <div className='profile'>
      <img src="./profile_demo.jpg" alt="profile" />
      {currentUser ? (
        <>
          <h1>{currentUser.name}</h1>
          <h2>{currentUser.email}</h2>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Settings;











// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import UserContext from "../context/userData/UserContext";

// function Settings() {
//   const navigate = useNavigate();
//   const { users, fetchUsers } = useContext(UserContext);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     const loggedInUserId = localStorage.getItem("userId");
//     if (users.length > 0 && loggedInUserId) {
//       const currentUser = users.find(user => user._id === loggedInUserId);
//       if (currentUser) {
//         setUser(currentUser);
//       }
//     }
//   }, [users]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId'); // Clear user ID on logout
//     navigate('/login');
//   };

//   return (
//     <div className='profile'>
//       <img src="./profile_demo.jpg" alt="profile" />
//       {user ? (
//         <>
//           <h1>{user.name}</h1>
//           <h2>{user.email}</h2>
//         </>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Settings;





// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import UserContext from "../context/userData/UserContext";

// function Settings() {
//   const navigate = useNavigate();
//   const { users, fetchUsers } = useContext(UserContext);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     if (users.length > 0) {
//       setUser(users[0]); // Assuming first user is the logged-in user
//     }
//   }, [users]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div className='profile'>
//       <img src="./profile_demo.jpg" alt="profile" />
//       {user ? (
//         <>
//           <h1>{user.name}</h1>
//           <h2>{user.email}</h2>
//         </>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//       <button onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Settings;




// import React from 'react'
// import { Link,useNavigate } from "react-router-dom";

// function Settings() {
//   const navigate = useNavigate();
//   const handleLogout=()=>{
//     localStorage.removeItem('token');
//     navigate('/');
//   }
//   return (
//     <div className='profile'>
//       <img src="./profile_demo.jpg" alt="profile" />
//       <h1>Ritheesh S Shetty</h1>
//       <h2>ritheeshshetty77@gmail.com</h2>
//       <button onClick={handleLogout}><Link to='/login'>Logout</Link></button>
//     </div>
//   )
// }

// export default Settings;