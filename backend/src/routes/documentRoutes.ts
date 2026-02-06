import { Router } from 'express';
import { generateDossier, getDocuments } from '../handlers/documentHandler';

const router = Router();

router.get('/', getDocuments);
router.post('/generate', generateDossier);

export default router;
