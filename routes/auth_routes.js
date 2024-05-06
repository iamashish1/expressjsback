// auth_routes.js


import { Router } from 'express';
const router = Router();
import authController from '../controllers/auth_controller.js'; // Import authController
import { validateSignUp } from '../middleware/validation_middleware.js';

// POST /signup
router.post('/signup', validateSignUp, authController.signUpAuth); // Use signUpAuth from authController

export default router;
