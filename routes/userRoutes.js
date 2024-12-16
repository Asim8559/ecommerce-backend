import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// Route: Register a new user
router.post('/register', registerUser);

// Route: Login user
router.post('/login', loginUser);

// Route: Get user profile
router.get('/profile', getUserProfile);

export default router;
