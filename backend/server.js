import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import courses from './data/Courses.js';
dotenv.config();
connectDB();
const app = express();
app.get('/', (req, res) => {
  res.send('api is running');
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c._id == req.params.id);
  res.json(course);
});

app.get('/api/courses/:name/:id', (req, res) => {
  const course = courses.find((c) => c._id == req.params.id);
  res.json(course);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `running in ${process.env.NODE_ENV} on ${PORT}..`.magenta.underline
  )
);
