import express from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';

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

// @desc delete course
// @route GET /api/courses/:id
// @access private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await course.remove();
    res.json({ message: 'Course Successfully Deleted' });
  } else {
    res.status(404);
    throw new error('Course not found!');
  }
});
// @desc create new course
// @route POST /api/courses
// @access public
const registerUser = asyncHandler(async (req, res) => {});
export { getCourseById, getCourses, deleteCourse };
