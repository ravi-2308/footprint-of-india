const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS for cross-origin requests
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS for handling cross-origin requests
app.use(express.json()); // Enable parsing of JSON payloads

// Fix Mongoose Deprecation Warning
mongoose.set('strictQuery', true); // Explicitly set strictQuery to true

// Routes
app.use('/api/events', require('./routes/events')); // Mount events route at /api/events

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Recommended options for MongoDB connection
  .then(() => console.log('MongoDB connected')) // Log on successful connection
  .catch((err) => console.error('MongoDB connection error:', err)); // Log error if connection fails

// Root Route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start Server
const PORT = process.env.PORT || 5001; // Use PORT from .env or default to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
