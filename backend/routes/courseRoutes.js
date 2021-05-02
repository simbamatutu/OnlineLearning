import express from 'express';
const router = express.Router();
import {
  getCourseById,
  getCourses,
  deleteCourse,
  updateCourse,
  createCourse,
} from '../controllers/courseControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').get(getCourses).post(protect, createCourse, isAdmin); /// PETRA REMEMBER TO PUT BCK MIDDLEWARE
//fix teachers cant create course
router
  .route('/:id')
  .get(getCourseById)
  .delete(protect, isAdmin, deleteCourse)
  .put(protect, updateCourse, isAdmin); /// PETRA REMEMBER TO PUT BCK MIDDLEWARE
router.route('/courses/:id').get(getCourseById);
//router.route('/courses/:name/:id').get(getCourseById);

export default router;
