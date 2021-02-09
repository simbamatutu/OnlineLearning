import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';
import Student from '../models/studentModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Teacher.findById(decoded.id).select('-password');
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Token Failed!');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('User Authorization failed.No token!');
  }
  next();
});

export default protect;
