import express from 'express';
const router = express.Router();
import {
  createSubtopic,
  getSubTopic,
  updateSubTopic,
  getSectionById,
} from '../controllers/coursewareControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
router
  .route('/:id')
  .get(getSectionById)
  .post(protect, createSubtopic, isAdmin)
  .put(protect, updateSubTopic, isAdmin);

export default router;
