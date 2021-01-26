const express = require('express');

const courses = require('./data/Course');

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

app.get('/api/courses/:name', (req, res) => {
  const course = courses.find((c) => c.name == req.params.name);
  res.json(course);
});

app.listen(5000, console.log('running on 5000'));
