import express from 'express';
const router = express.Router();
import protect from '../middleware/authMiddleware.js';
import {
  registerTeacher,
  authTeacher,
  getTeacherProfile,
} from '../controllers/teachersController.js';
import Teacher from '../models/teacherModel.js';
router.route('/').post(registerTeacher);
router.post('/login', authTeacher);
router.route('/profile').get(protect, getTeacherProfile);
export default router;
