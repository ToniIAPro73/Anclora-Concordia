"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInquiries = exports.createInquiry = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const createInquiry = async (req, res) => {
    try {
        const { leadId, propertyId, message } = req.body;
        const inquiry = await prisma_1.default.inquiry.create({
            data: {
                leadId,
                propertyId,
                message,
                status: 'OPEN',
            },
        });
        // Audit activity
        await prisma_1.default.activity.create({
            data: {
                leadId,
                type: 'SYSTEM',
                content: `Nueva consulta creada para la propiedad ${propertyId}`,
            },
        });
        res.status(201).json({ data: inquiry });
    }
    catch (error) {
        res.status(400).json({ error: { message: 'Error creating inquiry' } });
    }
};
exports.createInquiry = createInquiry;
const getInquiries = async (req, res) => {
    try {
        const inquiries = await prisma_1.default.inquiry.findMany({
            include: {
                lead: { select: { firstName: true, lastName: true, email: true } },
                property: { select: { title: true, price: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json({ data: inquiries });
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error fetching inquiries' } });
    }
};
exports.getInquiries = getInquiries;
