import express from 'express';
const router = express.Router();
import {
  getCourseById,
  getCourses,
  deleteCourse,
} from '../controllers/courseControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

router.route('/').get(getCourses);
router.route('/:id').get(getCourseById).delete(protect, isAdmin, deleteCourse);
router.route('/courses/:id').get(getCourseById);
router.route('/courses/:name/:id').get(getCourseById);

export default router;
