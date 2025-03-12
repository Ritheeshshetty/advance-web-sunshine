// // import React from 'react'

// // function AdminUsers() {
// //   return (
// //     <div className="userdash"></div>

// //   )
// // }

// // export default AdminUsers;

// import React, { useContext, useEffect } from "react";
// import UserContext from "../../context/userData/UserContext";

// function AdminUsers() {
//   const { users, fetchUsers } = useContext(UserContext);

//   useEffect(() => {
//     fetchUsers(); // Fetch users when the component mounts
//   }, []);

//   return (
//     <div className="userdash">
//       <h2>Admin Panel - Users</h2>
//       {users.length === 0 ? (
//         <p>Loading users...</p>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Admin</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.isAdmin ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AdminUsers;


// import React, { useContext, useEffect } from "react";
// import UserContext from "../../context/userData/UserContext";

// function AdminUsers() {
//   const { users, fetchUsers } = useContext(UserContext);

//   useEffect(() => {
//     fetchUsers(); // Fetch users when component mounts
//   }, []);

//   return (
//     <div className="userdash">
//       <h2>Admin Panel - Users</h2>
//       {users.length === 0 ? (
//         <p>Loading users...</p>
//       ) : (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Admin</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.isAdmin ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AdminUsers;


// import React, { useContext, useEffect } from "react";
// import UserContext from "../../context/userData/UserContext";
// // import "./AdminUsers.css"; // Import the CSS file

// function AdminUsers() {
//   const { users, fetchUsers } = useContext(UserContext);

//   useEffect(() => {
//     fetchUsers(); // Fetch users when component mounts
//   }, []);

//   return (
//     <div className="userdash">
//     <div className="admin-users-container">
//       <h2 className="admin-users-title">Admin Panel - Users</h2>
//       {users.length === 0 ? (
//         <p className="loading-text">Loading users...</p>
//       ) : (
//         <div className="user-list">
//           {users.map((user) => (
//             <div className="user-card" key={user._id}>
//               <div className="user-info">
//                 <h3>{user.name}</h3>
//                 <p>Email: {user.email}</p>
//                 <p>Admin: <span className={user.isAdmin ? "admin-yes" : "admin-no"}>
//                   {user.isAdmin ? "Yes" : "No"}
//                 </span></p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default AdminUsers;


//*********************************************** */
// no delete icons
// import React, { useContext, useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import UserContext from "../../context/userData/UserContext";


// function AdminUsers() {
//   const { users, fetchUsers } = useContext(UserContext);
//   const [page, setPage] = useState(1);
//   const [displayUsers, setDisplayUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers(); // Fetch users when component mounts
//   }, []);

//   useEffect(() => {
//     setDisplayUsers(users.slice(0, 10)); // Initially load 10 users
//   }, [users]);

//   const fetchMoreUsers = () => {
//     const nextPage = page + 1;
//     const newUsers = users.slice(0, nextPage * 10);
//     setDisplayUsers(newUsers);
//     setPage(nextPage);
//   };

//   return (
//     <div className="userdash">
//       <div className="admin-users-container">
//         <h2 className="admin-users-title">Admin Panel - Users</h2>
//         <InfiniteScroll
//           dataLength={displayUsers.length}
//           next={fetchMoreUsers}
//           hasMore={displayUsers.length < users.length}
//           loader={<p className="loading-text">Loading more users...</p>}
//           scrollableTarget="userdash"
//         >
//           <div className="user-list">
//             {displayUsers.map((user) => (
//               <div className="user-card" key={user._id}>
//                 <div className="user-info">
//                   <h3>{user.name}</h3>
//                   <p>Email: {user.email}</p>
//                   <p>Admin: <span className={user.isAdmin ? "admin-yes" : "admin-no"}>
//                     {user.isAdmin ? "Yes" : "No"}
//                   </span></p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// }

// export default AdminUsers;

// ******************************************//
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import UserContext from "../../context/userData/UserContext";


function AdminUsers() {
  const { users, fetchUsers } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [displayUsers, setDisplayUsers] = useState([]);

  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts
  }, []);

  useEffect(() => {
    setDisplayUsers(users.slice(0, 10)); 
    // console.log(users);
    
  }, [users]);

  const fetchMoreUsers = () => {
    const nextPage = page + 1;
    const newUsers = users.slice(0, nextPage * 10);
    setDisplayUsers(newUsers);
    setPage(nextPage);
  };

  const handleEdit = (userId) => {
    console.log("Edit user:", userId);
    // Implement edit functionality
  };

  const handleDelete = (userId) => {
    console.log("Delete user:", userId);
    // Implement delete functionality
  };

  return (
    <div className="userdash">
      <div className="admin-users-container">
        <h2 className="admin-users-title">Admin Panel - Users</h2>
        <InfiniteScroll
          dataLength={displayUsers.length}
          next={fetchMoreUsers}
          hasMore={displayUsers.length < users.length}
          loader={<p className="loading-text">Loading more users...</p>}
          scrollableTarget="userdash"
        >
          <div className="user-list">
            {displayUsers.map((user) => (
              <div className="user-card" key={user._id}>
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>Admin: <span className={user.isAdmin ? "admin-yes" : "admin-no"}>
                    {user.isAdmin ? "Yes" : "No"}
                  </span></p>
                </div>
                <div className="user-actions">
                  <FaEdit className="edit-icon" onClick={() => handleEdit(user._id)} />
                  <FaTrash className="delete-icon" onClick={() => handleDelete(user._id)} />
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default AdminUsers;


