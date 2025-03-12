// import React, { useState, useEffect, useContext } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import UserContext from "../../context/userData/UserContext";

// function AdminStats() {
//   const { users } = useContext(UserContext);
//   const [loginCount, setLoginCount] = useState(0);
//   const [articleViews, setArticleViews] = useState([]);

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/stats", {
//         headers: { "auth-token": token },
//       });
//       const data = await response.json();
//       setLoginCount(data.loginCount);
//       setArticleViews(data.articleViews);
//     } catch (error) {
//       console.error("Error fetching stats:", error);
//     }
//   };

//   const loginData = {
//     labels: ["Logins"],
//     datasets: [
//       {
//         label: "Total Logins",
//         data: [loginCount],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   };

//   const articleViewData = {
//     labels: articleViews.map((item) => item._id),
//     datasets: [
//       {
//         label: "Article Views",
//         data: articleViews.map((item) => item.count),
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   };

//   return (
//     <div className="admin-stats-container">
//       <h2>Admin Statistics</h2>
//       <div className="chart-container">
//         <div className="chart-box">
//           <h3>User Login Statistics</h3>
//           <Bar data={loginData} />
//         </div>
//         <div className="chart-box">
//           <h3>Most Viewed Articles</h3>
//           <Pie data={articleViewData} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminStats;



//   useEffect(() => {
//     fetchStats();
//   }, []);



//   const loginData = {
//     labels: ["Logins"],
//     datasets: [
//       {
//         label: "Total Logins",
//         data: [loginCount],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   };

//   const articleViewData = {
//     labels: articleViews.map((item) => item._id),
//     datasets: [
//       {
//         label: "Article Views",
//         data: articleViews.map((item) => item.count),
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   };
// import React, { useContext, useEffect } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import UserContext from "../../context/userData/UserContext";

// function AdminStats() {
//   const { loginCount, articleViews, fetchStats } = useContext(UserContext);


// useEffect(() => {
//     console.log("Updated loginCount:", loginCount);
//     console.log("Updated articleViews:", articleViews);
//   }, [loginCount, articleViews]);
  


// const loginData = {
//     labels: ["Logins"],
//     datasets: [
//       {
//         label: "Total Logins",
//         data: [loginCount || 0],
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   };
  
//   const articleViewData = {
//     labels: articleViews.length ? articleViews.map((item) => item._id) : ["No Data"],
//     datasets: [
//       {
//         label: "Article Views",
//         data: articleViews.length ? articleViews.map((item) => item.count) : [0],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   };
  
  

//   return (
//     <div className="userdash">
//     <div className="admin-stats-container">
//       <h2>Admin Statistics</h2>
//       <div className="chart-container">
//         <div className="chart-box">
//           <h3>User Login Statistics</h3>
//           <Bar data={loginData} />
//         </div>
//         <div className="chart-box">
//           <h3>Most Viewed Articles</h3>
//           <Pie data={articleViewData} />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default AdminStats;


import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import UserContext from "../../context/userData/UserContext";

function AdminStats() {
  const { loginCount, fetchStats } = useContext(UserContext);
  const [chartData, setChartData] = useState({
    labels: ["Logins"],
    datasets: [
      {
        label: "Total Logins",
        data: [0], // Initial placeholder
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  // Fetch stats when component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  // Update chart when loginCount changes
  useEffect(() => {
    console.log("Updated loginCount:", loginCount);
    setChartData({
      labels: ["Logins"],
      datasets: [
        {
          label: "Total Logins",
          data: [loginCount || 0], // Ensure data is updated
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });
  }, [loginCount]); // Run only when loginCount updates

  return (
    <div className="userdash">
      <div className="admin-stats-container">
        <h1>Admin Statistics</h1>
        <div className="chart-container">
          <div className="chart-box">
            <h3>User Login Statistics</h3>
            <Bar data={chartData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
