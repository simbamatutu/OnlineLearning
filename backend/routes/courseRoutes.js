import express from 'express';
const router = express.Router();
import { getCourseById, getCourses } from '../controllers/courseControllers.js';
import Teacher from '../models/userModel.js';

router.route('/').get(getCourses);

router.route('/:id').get(getCourseById);
router.route('/courses/:id').get(getCourseById);
router.route('/courses/:name/:id').get(getCourseById);

export default router;
