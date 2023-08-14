/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Videos from './models/video.model.js';
import Products from './models/product.model.js';
import Comments from './models/comment.model.js';

dotenv.config();
const DB_URL = process.env.DB_URL;

async function clearData() {
  try {
    await Videos.deleteMany();
    await Products.deleteMany();
    await Comments.deleteMany();
    console.log('Data cleared.');
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

const sampleVideos = [
  {
    title: 'How to Make a Paper Airplane',
    urlImage:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/10/5/e762a0be-ef51-4834-847a-77ca61192b2a.jpg.webp',
    thumbnail:
      'https://images.tokopedia.net/img/cache/250-square/VqbcmM/2021/10/5/e762a0be-ef51-4834-847a-77ca61192b2a.jpg.webp',
  },
  {
    title: "How to Solve a Rubik's Cube",
    urlImage:
      'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/20/0b36a99a-b5d1-4cc0-b4a8-12e7b1d36db5.jpg',
    thumbnail:
      'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/20/0b36a99a-b5d1-4cc0-b4a8-12e7b1d36db5.jpg',
  },
];

const sampleProducts = [
  {
    linkProduct: 'https://example.com/product/p001',
    title: "Rubik's Cube",
    price: 10000,
    videoId: 'vid001',
  },
  {
    linkProduct: 'https://example.com/product/p002',
    title: 'Paper Airplane Kit',
    price: 5000,
    videoId: 'vid002',
  },
];

const sampleComments = [
  {
    username: 'Fandi Hasnur',
    comment: 'This video was very helpful! ',
    videoId: 'vid002',
  },
  {
    username: 'Lionel Messi',
    comment: "I'm still trying to figure out!",
    videoId: 'vid001',
  },
];

async function insertDummyData() {
  try {
    await Videos.insertMany(sampleVideos);
    await Products.insertMany(sampleProducts);
    await Comments.insertMany(sampleComments);
    console.log('Dummy data inserted');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  }
}

async function seedDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
    await clearData();
    await insertDummyData();
    mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

seedDatabase();
