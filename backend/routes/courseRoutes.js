import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Course from '../models/courseModel.js';
import Teacher from '../models/teacherModel.js';

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

router.get(
  '/teachers',
  asyncHandler(async (req, res) => {
    const teachers = await Teacher.find({});

    res.json(teachers);
  })
);

// @desc Fetch app all Courses
// @route GET /api/teacher
// @access public
// router.get(
//   '/teachers',
//   asyncHandler(async (req, res) => {
//     const teachers = await Teacher.find({});
//     res.json(teachers);
//   })
// );
// @desc Fetch app course
// @route GET /api/courses:id
// @access public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404);
      throw new Error('Coures  not found');
    }
  })
);

// @desc Fetch courseware
// @route GET /api/courses/:name/:id
// @access public
router.get(
  '/courseware/:id',
  asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404);
      throw new Error('Couresware not found');
    }
  })
);
export default router;
