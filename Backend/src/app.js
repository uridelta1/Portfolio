require('dotenv').config()

const express = require('express')
const rateLimit = require('express-rate-limit')
const cors = require('cors')

const Projectrouter = require('./routes/project')
const Achievementrouter = require('./routes/achievement')
const Messagerouter = require('./routes/message')

const app = express()

app.use(express.json())

// Allowed frontend origins
const allowedOrigins = (
  process.env.CLIENT_ORIGIN || 'http://localhost:5173'
)
  .split(',')
  .map(origin => origin.trim())

app.use(
  cors({
    origin: allowedOrigins,
  })
)

// Rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: 'Too many messages sent. Please try again later.',
  },
})

app.use('/api/Project', Projectrouter)
app.use('/api/Achievement', Achievementrouter)
app.use('/api/Message', contactLimiter, Messagerouter)

module.exports = app
