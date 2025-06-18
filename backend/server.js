// Packages
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import cookieParser from 'cookie-parser';

// Local modules
import connectDB from './config/db.js';
import { connectToRedis } from './services/redis.js';
import postsRouter from './routes/posts.js';
import authRouter from './routes/auth.js';
import Post from './models/post.js';

dotenv.config();

const app = express();

// ✅ CORS Config
const allowedOrigins = [
  'https://dev-dairies.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

// Connect to MongoDB
connectDB();

// Connect to Redis
connectToRedis();

// API Routes
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

// Simple API route
app.get('/api/all-posts', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Root Route
app.get('/', (req, res) => {
  res.send('DevDiaries backend is live 🚀');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

export default app;
