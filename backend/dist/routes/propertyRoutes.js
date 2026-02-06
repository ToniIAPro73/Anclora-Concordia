"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propertyHandler_1 = require("../handlers/propertyHandler");
const router = (0, express_1.Router)();
router.get('/', propertyHandler_1.getAllProperties);
router.get('/:id', propertyHandler_1.getPropertyById);
exports.default = router;
