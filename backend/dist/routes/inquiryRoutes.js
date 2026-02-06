"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inquiryHandler_1 = require("../handlers/inquiryHandler");
const router = (0, express_1.Router)();
router.get('/', inquiryHandler_1.getInquiries);
router.post('/', inquiryHandler_1.createInquiry);
exports.default = router;
