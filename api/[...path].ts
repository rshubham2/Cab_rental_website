// api/[...path].ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';

// Import your existing server components
const app = express();

// Configure CORS for production
app.use(cors({
  origin: [
    'https://gauthamtravels.vercel.app', // Replace with your client URL
    'http://localhost:3000', // For local development
    'http://localhost:5173'  // Vite dev server
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use your existing routes
// Adjust this import path based on your server structure
try {
  const { router } = require('../server/routes');
  app.use('/api', router);
} catch (error) {
  console.error('Error importing routes:', error);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'Gautham Tours API'
  });
});

// Export the handler for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}
