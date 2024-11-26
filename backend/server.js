const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS for cross-origin requests
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS for handling cross-origin requests
app.use(express.json()); // Enable parsing of JSON payloads

// Routes
app.use('/api/events', require('./routes/events')); // Mount events route at /api/events

// MongoDB connection
mongoose.connect(process.env.MONGO_URI) // Removed deprecated options
  .then(() => console.log('MongoDB connected')) // Log on successful connection
  .catch(err => console.error(err)); // Log error if connection fails

// Root route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
const PORT = process.env.PORT || 5001; // Use PORT from .env or default to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
