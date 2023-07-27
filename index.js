/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './server/routes/routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.on('connected', () => {
  console.log('Database connected');
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/api/v1/videos', router);

app.use((req, res) => {
  res.status(404).json({
    message: 'not found!',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
