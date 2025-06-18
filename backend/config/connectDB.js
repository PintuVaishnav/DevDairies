import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected: ${process.env.MONGO_URI}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err.message}`);
  });
}
