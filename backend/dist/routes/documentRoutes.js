"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentHandler_1 = require("../handlers/documentHandler");
const router = (0, express_1.Router)();
router.get('/', documentHandler_1.getDocuments);
router.post('/generate', documentHandler_1.generateDossier);
exports.default = router;
