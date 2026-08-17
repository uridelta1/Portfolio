require("dotenv").config();

const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const Projectrouter = require("./routes/project");
const Achievementrouter = require("./routes/achievement");
const Messagerouter = require("./routes/message");
const Authrouter = require("./routes/auth");

const app = express();

app.use(express.json());

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-sage-five-bh0bx7p0rf.vercel.app",
  ...(process.env.CLIENT_ORIGIN
    ? process.env.CLIENT_ORIGIN.split(",").map((origin) => origin.trim())
    : []),
];

console.log("Allowed CORS origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      // (Postman, curl, server-to-server requests, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked CORS origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Portfolio backend is running",
  });
});

// Rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: "Too many messages sent. Please try again later.",
  },
});

app.use("/api/Project", Projectrouter);
app.use("/api/Achievement", Achievementrouter);
app.use("/api/Message", contactLimiter, Messagerouter);
app.use("/api/auth", Authrouter);

module.exports = app;