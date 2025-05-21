// const connectToMongo = require("./db");
// const express = require("express");
// var cors = require("cors");

// // const adminRoute = require("./routes/admin-router");

// connectToMongo();
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", require("./routes/auth"));

// // Admin Route
// app.use("/api/admin", require("./routes/admin-router"));

// app.listen(port, () => {
//   console.log(`Sunshine Express backend listening on port ${port}`);
// });

// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// // Connect to MongoDB
// connectToMongo();

// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ CORS Configuration (Allow requests from frontend only)
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "*", // Change this to your frontend domain in production
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
// };
// app.use(cors(corsOptions));

// // ✅ Middleware
// app.use(express.json());

// // ✅ Routes
// app.use("/api/news", require("./routes/news")); // News API Routes
// app.use("/api/auth", require("./routes/auth")); // Authentication Routes
// app.use("/api/admin", require("./routes/admin-router")); // Admin Routes

// // ✅ Start Server
// app.listen(port, () => {
//   console.log(`✅ Sunshine Express backend running on port ${port}`);
// });

// require("dotenv").config(); // Load environment variables

// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// // Connect to MongoDB
// connectToMongo();

// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ CORS Configuration (Allow All for Local Testing)
// app.use(cors());
// app.use(express.json());

// // ✅ Middleware to Log Requests
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// });

// // ✅ Routes
// app.use("/api/news", require("./routes/news")); // News API Routes
// app.use("/api/auth", require("./routes/auth")); // Authentication Routes
// app.use("/api/admin", require("./routes/admin-router")); // Admin Routes

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("Sunshine Express API is running!");
// });

// // ✅ Start Server
// app.listen(port, () => {
//   console.log(`✅ Sunshine Express backend running on port ${port}`);
// });

// ********************************working backend*******************//
// const connectToMongo = require("./db");
// const express = require("express");
// var cors = require("cors");

// connectToMongo();
// const app = express();
// const port = 5000;
// const newsRoutes = require("./routes/news");

// app.use(cors());
// app.use(express.json());

// app.use("/api/news", newsRoutes);

// // Authentication Routes
// app.use("/api/auth", require("./routes/auth"));

// // Admin Routes
// app.use("/api/admin", require("./routes/admin-router"));

// app.listen(port, () => {
//   console.log(`Sunshine Express backend listening on port ${port}`);
// });

// ✅ CORS Configuration (Secure for Hosting)
// const corsOptions = {
//   origin: process.env.FRONTEND_URL || "http://localhost:5000",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
// ************** new backend ***************//
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const connectToMongo = require("./db");

// // ✅ Async MongoDB Connection
// (async () => {
//   try {
//     await connectToMongo();
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//     process.exit(1); // Exit process if DB fails
//   }
// })();

// const app = express();
// const port = process.env.PORT || 5000;


// const corsOptions = {
//   origin: [
//     process.env.FRONTEND_URL || "http://localhost:3000",
//     // "https://sunshine-frontend-sable.vercel.app/",
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// // ✅ Middleware to Log Requests
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// });

// // ✅ Routes
// app.use("/api/news", require("./routes/news")); // News API Routes
// app.use("/api/auth", require("./routes/auth")); // Authentication Routes
// app.use("/api/admin", require("./routes/admin-router")); // Admin Routes

// // ✅ Test Route
// app.get("/", (req, res) => {
//   res.send("Sunshine Express API is running!");
// });

// // ✅ Global Error Handlers (Prevents Server Crash)
// process.on("uncaughtException", (err) => {
//   console.error("❌ Uncaught Exception:", err);
//   process.exit(1);
// });

// process.on("unhandledRejection", (reason, promise) => {
//   console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
// });

// // ✅ Start Server
// app.listen(port, () => {
//   console.log(`✅ Sunshine Express backend running on port ${port}`);
// });



// ***************************************************************

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

// ✅ Async MongoDB Connection
(async () => {
  try {
    await connectToMongo();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit process if DB fails
  }
})();

const app = express();
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: [
    process.env.FRONTEND_URL || "http://localhost:3000",
    
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ Middleware to Log Requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ✅ Routes
app.use("/api/news", require("./routes/news")); // News API Routes
app.use("/api/auth", require("./routes/auth")); // Authentication Routes
app.use("/api/admin", require("./routes/admin-router")); // Admin Routes

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Sunshine Express API is running!");
});

// ✅ Global Error Handlers (Prevents Server Crash)
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`✅ Sunshine Express backend running on port ${port}`);
});
