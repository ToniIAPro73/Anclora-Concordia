"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leadHandler_1 = require("../handlers/leadHandler");
const router = (0, express_1.Router)();
router.get('/', leadHandler_1.getAllLeads);
router.post('/', leadHandler_1.createLead);
router.patch('/:id/status', leadHandler_1.updateLeadStatus);
exports.default = router;
