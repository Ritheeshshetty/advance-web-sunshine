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

// import React, { useContext, useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import UserContext from "../../context/userData/UserContext";

// function AdminStats() {
//   const { loginCount, fetchStats } = useContext(UserContext);
//   const [chartData, setChartData] = useState({
//     labels: ["Logins"],
//     datasets: [
//       {
//         label: "Total Logins",
//         data: [0], // Initial placeholder
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   });

//   // Fetch stats when component mounts
//   useEffect(() => {
//     fetchStats();
//   }, []);

//   // Update chart when loginCount changes
//   useEffect(() => {
//     console.log("Updated loginCount:", loginCount);
//     setChartData({
//       labels: ["Logins"],
//       datasets: [
//         {
//           label: "Total Logins",
//           data: [loginCount || 0], // Ensure data is updated
//           backgroundColor: "rgba(75, 192, 192, 0.6)",
//         },
//       ],
//     });
//   }, [loginCount]); // Run only when loginCount updates

//   return (
//     <div className="userdash">
//       <div className="admin-stats-container">
//         <h1>Admin Statistics</h1>
//         <div className="chart-container">
//           <div className="chart-box">
//             <h3>User Login Statistics</h3>
//             <Bar data={chartData}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminStats;

// import React, { useContext, useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";
// import UserContext from "../../context/userData/UserContext";

// function AdminStats() {
//   const { loginCount, fetchStats } = useContext(UserContext);
//   const [chartData, setChartData] = useState({
//     labels: ["Logins"],
//     datasets: [
//       {
//         label: "Total Logins",
//         data: [0], // Initial placeholder
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   });

//   // Fetch stats when component mounts
//   useEffect(() => {
//     fetchStats();
//   }, []);

//   // Update chart when loginCount changes
//   useEffect(() => {
//     if (typeof loginCount !== "undefined") {
//       console.log("Updated loginCount:", loginCount);
//       setChartData({
//         labels: ["Logins"],
//         datasets: [
//           {
//             label: "Total Logins",
//             data: [loginCount || 0], // Ensure data is updated
//             backgroundColor: "rgba(75, 192, 192, 0.6)",
//           },
//         ],
//       });
//     }
//   }, [loginCount]); // Run only when loginCount updates

//   return (
//     <div className="userdash">
//       <div className="admin-stats-container">
//         <h1>Admin Statistics</h1>
//         <div className="chart-container">
//           <div className="chart-box">
//             <h3>User Login Statistics</h3>
//             {loginCount !== undefined ? (
//               <Bar data={chartData} />
//             ) : (
//               <p>Loading statistics...</p>
//             )}
//           </div>
//         </div>
//       </div>
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

  // Dummy Data for Additional Charts
  const [dailyLogins, setDailyLogins] = useState({
    "March 1": 4,
    "March 2": 5,
    "March 3": 2,
    "March 4": 5,
    "March 9": 3,
    "March 10": 2,
    "March 11": 1,
    "March 14": 2,
  });

  const [userJoinsByMonth, setUserJoinsByMonth] = useState({
    "Feb 2025": 2,
    "Feb 5 2025": 3,
    "Feb 25 2025": 0,
    "March 1 2025": 1,
    "March 5 2025": 3,
    "March 14 2025": 1,
  });

  const [articleViews, setArticleViews] = useState([
    { title: "CNN", views: 5 },
    { title: "BBC News", views: 15 },
    { title: "Fox News", views: 6 },
    { title: "Al Jazeera", views: 7 },
    { title: "The Guardian", views: 0 },
    { title: "Reuters", views: 8 },
  ]);

  const [categoryViews, setCategoryViews] = useState([
    { name: "Business", views: 53 },
    { name: "Entertainment", views: 47 },
    { name: "General", views: 113 },
    { name: "Health", views: 34 },
    { name: "Science", views: 27 },
    { name: "Sports", views: 48 },
    { name: "Technology", views: 21 },
  ]);

  // Fetch stats when component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  // Update chart when loginCount changes
  useEffect(() => {
    if (typeof loginCount !== "undefined") {
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
    }
  }, [loginCount]); // Run only when loginCount updates

  return (
    <div className="userdash">
      <div className="admin-stats-container">
        <h1>Admin Statistics</h1>
        <div className="chart-container">
          <div className="chart-box">
            <h3>User Login Statistics</h3>
            {loginCount !== undefined ? (
              <Bar data={chartData} />
            ) : (
              <p>Loading statistics...</p>
            )}
          </div>

          {/* 📆 Daily Logins Chart */}
          <div className="chart-box">
            <h3>Daily Logins</h3>
            <Bar
              data={{
                labels: Object.keys(dailyLogins),
                datasets: [
                  {
                    label: "Logins per Day",
                    data: Object.values(dailyLogins),
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                  },
                ],
              }}
            />
          </div>

          {/* 🆕 User Registrations (Monthly) */}
          <div className="chart-box">
            <h3>User Registrations (Feb 2025 - March 14 2025)</h3>
            <Bar
              data={{
                labels: Object.keys(userJoinsByMonth),
                datasets: [
                  {
                    label: "Users Joined",
                    data: Object.values(userJoinsByMonth),
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                  },
                ],
              }}
            />
          </div>

          {/* 📰 Most Viewed Articles */}
          <div className="chart-box">
            <h3>Most Viewed News Channels</h3>
            <Bar
              data={{
                labels: articleViews.map((a) => a.title),
                datasets: [
                  {
                    label: "Views",
                    data: articleViews.map((a) => a.views),
                    backgroundColor: "rgba(153, 102, 255, 0.6)",
                  },
                ],
              }}
            />
          </div>

          {/* 📂 Most Popular Categories */}
          <div className="chart-box">
            <h3>Popular Categories</h3>
            <Bar
              data={{
                labels: categoryViews.map((c) => c.name),
                datasets: [
                  {
                    label: "Views",
                    data: categoryViews.map((c) => c.views),
                    backgroundColor: "rgba(255, 206, 86, 0.6)",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
