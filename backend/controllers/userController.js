import express from 'express';
import asyncHandler from 'express-async-handler';

import generateTokenfrom from '../utils/generateToken.js';

import User from '../models/userModel.js';

// @desc Auth users and get token
// @route POST /api/teachers/login
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { loginName, password } = req.body;
  const user = await User.findOne({ loginName });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      isTeacher: user.isTeacher,
      loginName: user.loginName,
      isAdmin: user.isAdmin,
      token: generateTokenfrom(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password!');
  }
});

// @desc Regster new user
// @route POST /api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    loginName,
    password,
    isStudent,
    isTeacher,
    studentNumber,
    teacherNumber,
  } = req.body;
  const userExists = await User.findOne({ loginName });

  if (userExists) {
    res.status(400);
    throw new Error('Username already exist!');
  }

  const user = await User.create({
    name,
    email,
    loginName,
    password,
    isStudent,
    isTeacher,
    studentNumber,
    teacherNumber,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      loginName: user.loginName,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
      studentNumber: user.studentNumber,
      teacherNumber: user.teacherNumber,
      token: generateTokenfrom(user._id),
    });
  } else {
    res.status(400);
    throw new error('Invalid user data');
  }
});

// @desc get logged in profile
// @route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      loginName: user.loginName,
      studentNumber: user.studentNumber,
      teacherNumber: user.teacherNumber,
      isTeacher: user.isTeacher,
      isStudent: user.isStudent,
      enrolledCourses: user.enrolledCourses,
      coursesTaught: user.coursesTaught,
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});

// @desc update user Profile
// @route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.loginName = req.body.loginName || user.loginName;
    user.studentNumber = req.body.studentNumber || user.studentNumber;
    user.teacherNumber = req.body.teacherNumber || user.teacherNumber;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      loginName: updatedUser.loginName,
      isAdmin: updatedUser.isAdmin,
      token: generateTokenfrom(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});

// @desc get all users
// @route GET /api/users
// @access private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc delete user
// @route GET /api/users/:id
// @access private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User Successfully Deleted' });
  } else {
    res.status(404);
    throw new error('User not found!');
  }
});

// @desc get userby ID
// @route GET /api/users/:id
// @access private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new error('User not found!');
  }
});

// @desc update user
// @route PUT /api/users/:id
// @access private Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.loginName = req.body.loginName || user.loginName;
    user.studentNumber = req.body.studentNumber || user.studentNumber;
    user.teacherNumber = req.body.teacherNumber || user.teacherNumber;
    user.isAdmin = req.body.isAdmin;
    user.isTeacher = req.body.isTeacher;
    user.isStudent = req.body.isStudent;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      loginName: updatedUser.loginName,
      isAdmin: updatedUser.isAdmin,
      isStudent: updatedUser.isStudent,
      isTeacher: updatedUser.isTeacher,
      studentNumber: updatedUser.studentNumber,
      teacherNumber: updatedUser.teacherNumber,
    });
  } else {
    res.status(404);
    throw new error('User Not Found');
  }
});
export {
  authUser,
  getUserProfile,
  deleteUser,
  registerUser,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
};
