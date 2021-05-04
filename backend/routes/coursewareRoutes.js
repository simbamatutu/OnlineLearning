import express from 'express';
const router = express.Router();
import {
  updateCourseware,
  createCourseware,
  getCoursewares,
} from '../controllers/coursewareControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
router
  .route('/:id')
  .post(protect, createCourseware, isAdmin)
  .put(protect, updateCourseware, isAdmin)
  .get(getCoursewares);
export default router;
