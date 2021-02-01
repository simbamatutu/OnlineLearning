import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Course from '../models/courseModel.js';

// @desc Fetch app all Courses
// @route GET /api/courses
// @access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
  })
);

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const course = Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ msg: 'get away' });
    }
  })
);

// @desc Fetch courseware
// @route GET /api/courses/:name/:id
// @access public
router.get(
  '/:name/:id',
  asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ msg: 'get away' });
    }
  })
);
export default router;
