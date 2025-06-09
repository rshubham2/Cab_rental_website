// api/server.js
const express = require('express');
const path = require('path');

// Import your existing server
const { createApp } = require('../server/index.js');

const app = createApp();

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch all handler for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
