// import React, { useEffect } from "react";
// import UserContext from "../userData/UserContext";

// const UserState = (props) => {

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found!");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Fix: Using Bearer format
//         },
//       });

//       const data = await response.json();
//       console.log("Fetched Users:", data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // Fetch users when component mounts
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <UserContext.Provider value={{  fetchUsers }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;

// eslint-disable-next-line
// const [users, setUsers] = useState([]);
// const API_URL = "http://localhost:5000/api/admin/users"; // Adjust the URL as needed

// Function to fetch users
// const fetchUsers = async () => {
//   try {
//     const authToken = localStorage.getItem("authToken"); // Get token from local storage
//     const response = await fetch(API_URL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": authToken, // Send auth token
//       },
//     });
//     const data = await response.json();
//     if (response.ok) {
//       setUsers(data);
//     } else {
//       console.error("Error fetching users:", data.error);
//     }
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// import React, { useState, useEffect } from "react";
// import UserContext from "../userData/UserContext";

// const UserState = (props) => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ users, fetchUsers }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;

// import React, { useState, useEffect } from "react";
// import UserContext from "./UserContext";

// const UserState = (props) => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,  // Ensure correct header name
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch users");
//       }
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ users, fetchUsers }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;

// import React, { useState, useEffect } from "react";
// import UserContext from "./UserContext";

// const UserState = (props) => {
//   const [users, setUsers] = useState([]);
//   const [loginCount, setLoginCount] = useState(0);
//   const [articleViews, setArticleViews] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/admin/users", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch users");
//       }
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const fetchStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/admin/stats", {

//         headers: { "auth-token": token },
//       });
//       const data = await response.json();
//       console.log("Fetched Stats:", data); // Debugging Output
//       setLoginCount(data.loginCount);
//       setArticleViews(data.articleViews);
//     } catch (error) {
//       console.error("Error fetching stats:", error);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ users, fetchUsers, loginCount, articleViews, fetchStats }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;

// import React, { useState, useEffect } from "react";
// import UserContext from "./UserContext";


// const UserState = (props) => {
//   const [users, setUsers] = useState([]); // Stores all users (for admin)
//   const [currentUser, setCurrentUser] = useState(null); // ✅ Stores logged-in user
//   const [loginCount, setLoginCount] = useState(0);
//   const [articleViews, setArticleViews] = useState([]);
//   const API_BASE_URL =
// process.env.REACT_APP_BACKEND_URL;

//   // Fetch all users (for admin)
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch users");
//       }
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // ✅ Fetch the logged-in user's details
//   const fetchCurrentUser = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(`${API_BASE_URL}/api/auth/getuser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch user");
//       }
//       setCurrentUser(data); // ✅ Set the logged-in user's data
//     } catch (error) {
//       console.error("Error fetching logged-in user:", error);
//     }
//   };

//   // Fetch website statistics (login count, article views, etc.)
//   const fetchStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/admin/stats", {
//         headers: { "auth-token": token },
//       });

//       const data = await response.json();
//       setLoginCount(data.loginCount);
//       setArticleViews(data.articleViews);
//     } catch (error) {
//       console.error("Error fetching stats:", error);
//     }
//   };

//   // Fetch current user when context loads
//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         users,
//         fetchUsers,
//         currentUser,
//         fetchCurrentUser,
//         loginCount,
//         articleViews,
//         fetchStats,
//       }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;






// import React, { useState, useEffect } from "react";
// import UserContext from "./UserContext";

// const UserState = (props) => {
//   const [users, setUsers] = useState([]); // Stores all users (for admin)
//   const [currentUser, setCurrentUser] = useState(null); // ✅ Stores logged-in user
//   const [loginCount, setLoginCount] = useState(0);
//   const [articleViews, setArticleViews] = useState([]);
//   const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

//   // Fetch all users (for admin)
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return; // ✅ Prevent API call if no token

//       const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch users");
//       }
//       setUsers(data);
//     } catch (error) {
//       console.error("⚠️ Error fetching users:", error.message);
//     }
//   };

//   // ✅ Fetch the logged-in user's details
//   const fetchCurrentUser = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       const response = await fetch(`${API_BASE_URL}/api/auth/getuser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": token,
//         },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch user");
//       }
//       setCurrentUser(data); // ✅ Set the logged-in user's data
//     } catch (error) {
//       console.error("⚠️ Error fetching logged-in user:", error.message);
//     }
//   };

//   // Fetch website statistics (login count, article views, etc.)
//   const fetchStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return; // ✅ Prevent API call if no token

//       const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
//         headers: { "auth-token": token },
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to fetch stats");
//       }
//       setLoginCount(data.loginCount);
//       setArticleViews(data.articleViews);
//     } catch (error) {
//       console.error("⚠️ Error fetching stats:", error.message);
//     }
//   };

//   // Fetch current user when context loads
//   useEffect(() => {
//     fetchCurrentUser();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         users,
//         fetchUsers,
//         currentUser,
//         fetchCurrentUser,
//         loginCount,
//         articleViews,
//         fetchStats,
//       }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserState;








import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const [users, setUsers] = useState([]); // Stores all users (for admin)
  const [currentUser, setCurrentUser] = useState(null); // ✅ Stores logged-in user
  const [loginCount, setLoginCount] = useState(0);
  const [articleViews, setArticleViews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  // Fetch all users (for admin)
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return; // ✅ Prevent API call if no token

      const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch users");
      }
      setUsers(data);
    } catch (error) {
      console.error("⚠️ Error fetching users:", error.message);
    }
  };

  // ✅ Fetch the logged-in user's details
  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch user");
      }

      // ✅ Force `isAdmin` to be a boolean (fix incorrect type)
      data.isAdmin = data.isAdmin === true || data.isAdmin === "true";

      setCurrentUser(data);
    } catch (error) {
      console.error("⚠️ Error fetching logged-in user:", error.message);
    }
  };

  // Fetch website statistics (login count, article views, etc.)
  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return; // ✅ Prevent API call if no token

      const response = await fetch(`${API_BASE_URL}/api/admin/stats`, {
        headers: { "auth-token": token },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch stats");
      }
      setLoginCount(data.loginCount);
      setArticleViews(data.articleViews);
    } catch (error) {
      console.error("⚠️ Error fetching stats:", error.message);
    }
  };

  // Fetch current user when context loads
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // ✅ Debugging: Log `currentUser` to verify data
  useEffect(() => {
    console.log("🔍 Current User:", currentUser);
  }, [currentUser]);

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        currentUser,
        fetchCurrentUser,
        loginCount,
        articleViews,
        fetchStats,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
