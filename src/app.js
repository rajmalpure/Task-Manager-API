const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/tasks', taskRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Task Manager API is running!',
    timestamp: new Date().toISOString()
  });
});

// ✅ Catch-all route for frontend (fix for Express 5)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
