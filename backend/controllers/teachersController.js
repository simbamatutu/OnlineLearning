import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import generateTokenfrom from '../utils/generateToken.js';

import Teacher from '../models/teacherModel.js';

// @desc Auth teachers and get token
// @route POST /api/tea chers/login
// @access public
const authTeacher = asyncHandler(async (req, res) => {
  const { loginName, password } = req.body;
  const teacher = await Teacher.findOne({ loginName });

  if (teacher && (await teacher.matchPassword(password))) {
    res.json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      isAdmin: teacher.isAdmin,
      token: generateTokenfrom(teacher._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password!');
  }
});

// @desc Regster new teacher
// @route POST /api/user
// @access public
const registerTeacher = asyncHandler(async (req, res) => {
  const { name, email, loginName, password } = req.body;
  const teacherExists = await Teacher.findOne({ loginName });

  if (teacherExists) {
    res.status(400);
    throw new Error('User already exist!');
  }

  const teacher = await Teacher.create({
    name,
    email,
    loginName,
    password,
  });

  if (teacher) {
    res.status(201).json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      isAdmin: teacher.isAdmin,
      token: generateTokenfrom(teacher._id),
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
});

// @desc get logged in profile
// @route GET /api/teachers/profile
// @access private
const getTeacherProfile = asyncHandler(async (req, res) => {
  const teacher = await Teacher.findById(req.user._id);
  console.log(teacher);
  if (teacher) {
    res.json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      coursesTaught: teacher.coursesTaught,
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});

export { authTeacher, getTeacherProfile, registerTeacher };
