import { Router } from 'express';
const router = Router();
import { signup, login, continueWithoutSignup } from '../controllers/authController';

// Define routes for signup, login, and continue without signup
router.post('/signup', signup);
router.post('/login', login);
router.post('/continue', continueWithoutSignup);

export default router;
