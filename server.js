import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Import routes using ES module syntax
import authRoutes from './routes/authRoutes.js'; // Use import instead of require
import itineraryRoutes from './routes/itineraryRoutes.js'; // Use import instead of require
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // Use bodyParser as a middleware

// MongoDB connection
connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api', itineraryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

