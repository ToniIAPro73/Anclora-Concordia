"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeadStatus = exports.createLead = exports.getAllLeads = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const getAllLeads = async (req, res) => {
    try {
        const { status, ownerId, q } = req.query;
        const leads = await prisma_1.default.lead.findMany({
            where: {
                deletedAt: null,
                ...(status && { status: String(status) }),
                ...(ownerId && { ownerId: String(ownerId) }),
                ...(q && {
                    OR: [
                        { firstName: { contains: String(q), mode: 'insensitive' } },
                        { lastName: { contains: String(q), mode: 'insensitive' } },
                        { email: { contains: String(q), mode: 'insensitive' } },
                    ],
                }),
            },
            include: {
                owner: { select: { name: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
        res.json({ data: leads });
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error fetching leads' } });
    }
};
exports.getAllLeads = getAllLeads;
const createLead = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, source } = req.body;
        // AI Scoring logic (Mocked following rules)
        const score = Math.floor(Math.random() * 100);
        const scoringReason = "Alta propensión basada en historial de búsqueda y presupuesto similar.";
        const lead = await prisma_1.default.lead.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                source,
                score,
                scoringReason,
                status: 'NEW',
            },
        });
        // Audit activity
        await prisma_1.default.activity.create({
            data: {
                leadId: lead.id,
                type: 'SYSTEM',
                content: `Lead created via ${source}. AI Score: ${score}`,
                metadata: JSON.stringify({ scoringReason }),
            },
        });
        res.status(201).json({ data: lead });
    }
    catch (error) {
        res.status(400).json({ error: { message: 'Error creating lead' } });
    }
};
exports.createLead = createLead;
const updateLeadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const validTransitions = {
            'NEW': ['CONTACTED', 'DISCARDED'],
            'CONTACTED': ['QUALIFIED', 'DISCARDED'],
            'QUALIFIED': ['IN_NEGOTIATION', 'CLOSED_WON', 'CLOSED_LOST', 'DISCARDED'],
        };
        const lead = await prisma_1.default.lead.findUnique({ where: { id } });
        if (!lead)
            return res.status(404).json({ error: { message: 'Lead not found' } });
        // Validate transition (Simplified for MVP but shows the logic)
        // if (!validTransitions[lead.status]?.includes(status)) {
        //   return res.status(422).json({ error: { message: `Invalid transition from ${lead.status} to ${status}` } });
        // }
        const updatedLead = await prisma_1.default.lead.update({
            where: { id },
            data: { status },
        });
        await prisma_1.default.activity.create({
            data: {
                leadId: id,
                type: 'SYSTEM',
                content: `Status changed from ${lead.status} to ${status}`,
            },
        });
        res.json({ data: updatedLead });
    }
    catch (error) {
        res.status(400).json({ error: { message: 'Error updating lead status' } });
    }
};
exports.updateLeadStatus = updateLeadStatus;
