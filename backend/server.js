import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import connectDB from './config/db.js';
import morgan from 'morgan';
import coursewareRoutes from './routes/coursewareRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import subTopicRoutes from './routes/subTopicRoutes.js';
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
dotenv.config();
connectDB();

const app = express();
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.get('/', (req, res) => {
  res.send('api is running');
});

app.use('/api/courses', courseRoutes);
app.use('/api/subtopic', subTopicRoutes);
app.use('/api/courseware', coursewareRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

//make a folder static the upload folder

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//Error handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});
///end of error handle

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `running in ${process.env.NODE_ENV} on ${PORT}..`.magenta.underline
  )
);
