import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
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

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized.You are not admin');
  }
};

const isTeacher = (req, res, next) => {
  if (req.user && req.user.isTeacher) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized.You are not Teacher');
  }
};

export { protect, isAdmin, isTeacher };
