import { Router } from 'express';
const router = Router();
import { getPlaces } from '../controllers/itineraryController.js';
import authenticateJWT from '../middleware/authMiddleware.js';

router.post('/getPlaces', authenticateJWT, getPlaces);

export default router;
