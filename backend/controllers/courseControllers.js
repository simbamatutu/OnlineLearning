import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Course from '../models/courseModel.js';
import Teacher from '../models/teacherModel.js';

// @desc Fetch app all Courses
// @route GET /api/courses
// @access public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});

  res.json(courses);
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error('Coures  not found');
  }

  res.json(courses);
});

export { getCourseById, getCourses };
