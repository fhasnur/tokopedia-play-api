/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import videos from './server/routes/videos.js';
import products from './server/routes/videos.js';
import comments from './server/routes/videos.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', async () => {
  console.log('Connected to database');

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/videos', videos);
app.use('/product', products);
app.use('/comment', comments);

app.use((req, res) => {
  res.status(404).json({
    message: 'not found!',
  });
});
