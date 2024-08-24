import { Router } from 'express';
const router = Router();
import { getPlaces } from '../controllers/itineraryController';
import authenticateJWT from '../middleware/authMiddleware';

router.post('/getPlaces', authenticateJWT, getPlaces);

export default router;
