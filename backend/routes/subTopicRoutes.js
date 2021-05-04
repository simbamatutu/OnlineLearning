import express from 'express';
const router = express.Router();
import {
  createSubtopic,
  getSubTopic,
  updateSubTopic,
} from '../controllers/coursewareControllers.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
router
  .route('/:id')
  .post(protect, createSubtopic, isAdmin)
  .put(protect, updateSubTopic, isAdmin)
  .get(getSubTopic);
export default router;
