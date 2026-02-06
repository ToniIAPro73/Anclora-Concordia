import { Router } from 'express';
import { createInquiry, getInquiries } from '../handlers/inquiryHandler';

const router = Router();

router.get('/', getInquiries);
router.post('/', createInquiry);

export default router;
