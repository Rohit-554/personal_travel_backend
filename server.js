import express from 'express';
import { mongoose } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


import authRoutes from './routes/authRoutes.js';
import itineraryRoutes from './routes/itineraryRoutes.js'; 
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json()); 

// MongoDB connection
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected!");
};

connectDB();
// connect(`${process.env.MONGODB_URI}/Personal_Travel`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));


app.use('/api/auth', authRoutes);
app.use('/api', itineraryRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

