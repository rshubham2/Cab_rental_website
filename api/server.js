// api/server.js
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();

// Configure CORS
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your existing routes (adjust path if needed)
try {
  const routes = require('../server/routes');
  app.use('/api', routes);
} catch (error) {
  console.log('Routes import error:', error);
  
  // Fallback route for testing
  app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
  });
}

// Handle all API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

module.exports = app;
