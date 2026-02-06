import { Router } from 'express';
import { getAllProperties, getPropertyById } from '../handlers/propertyHandler';

const router = Router();

router.get('/', getAllProperties);
router.get('/:id', getPropertyById);

export default router;
