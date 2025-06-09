import { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';

// Import your existing server setup
import { createServer } from '../server/index';

// Create Express app
const app = express();

// Configure CORS for Vercel
app.use(cors({
  origin: true,
  credentials: true
}));

// Import your routes
app.use('/api', createServer());

// Export handler for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle the request with Express
  return app(req, res);
}
