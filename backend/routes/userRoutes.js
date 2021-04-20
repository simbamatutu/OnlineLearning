import express from 'express';
const router = express.Router();
import { protect, isAdmin, isTeacher } from '../middleware/authMiddleware.js';

import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(protect, isAdmin, isTeacher, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);
export default router;
