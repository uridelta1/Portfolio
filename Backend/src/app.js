// const express=require('express')
// const Projectrouter=require('./routes/project')
// const Achievementrouter=require('./routes/achievement')
// const Messagerouter=require('./routes/message')
// const cors=require('cors')




// const app=express()
// app.use(express.json())


// const allowedOrigins = (
//   process.env.CLIENT_ORIGIN || "http://localhost:5173"
// ).split(",");

// app.use(
//   cors({
//     origin: allowedOrigins,
//   })
// );

// app.use(express.json());

// // Rate limit for contact form
// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     error: "Too many messages sent. Please try again later.",
//   },
// });



// app.use('/api/Project',Projectrouter)
// app.use('/api/Achievement',Achievementrouter)
// app.use('/api/Message',Messagerouter)

// module.exports=app
require('dotenv').config()
const express = require('express')
const rateLimit = require('express-rate-limit')
const Projectrouter = require('./routes/project')
const Achievementrouter = require('./routes/achievement')
const Messagerouter = require('./routes/message')
const cors = require('cors')

const app = express()
app.use(express.json())

const allowedOrigins = (
  process.env.CLIENT_ORIGIN || "http://localhost:5173"
).split(",");

app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: "Too many messages sent. Please try again later.",
  },
});

app.use('/api/Project', Projectrouter)
app.use('/api/Achievement', Achievementrouter)
app.use('/api/Message', contactLimiter, Messagerouter) // ← limiter applied here

module.exports = app