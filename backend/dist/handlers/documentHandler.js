"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocuments = exports.generateDossier = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const generateDossier = async (req, res) => {
    try {
        const { propertyId, leadId } = req.body;
        const property = await prisma_1.default.property.findUnique({ where: { id: propertyId } });
        if (!property)
            return res.status(404).json({ error: { message: 'Property not found' } });
        // AI Summary logic (Mocked following rules)
        const summary = `Exclusiva villa en ${property.location} con acabados de alta gama y diseño mediterráneo. Ideal para inversores buscando rentabilidad y prestigio.`;
        const aiMetadata = {
            model: "concordia-docs-v1",
            confidence: 0.98,
            sourceFragments: ["vistas al mar", "piscina infinita", "6 dormitorios"],
            generatedAt: new Date().toISOString(),
        };
        const document = await prisma_1.default.document.create({
            data: {
                title: `Dossier: ${property.title}`,
                type: 'DOSSIER',
                url: `https://storage.anclora.com/dossiers/${propertyId}-${Date.now()}.pdf`,
                leadId,
                propertyId,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiration
            },
        });
        // Log AI activity with traceability
        await prisma_1.default.activity.create({
            data: {
                leadId: leadId || '',
                type: 'SYSTEM',
                content: `Documento generado por IA: ${document.title}`,
                metadata: JSON.stringify({ summary, ...aiMetadata }),
            },
        });
        res.status(201).json({ data: { ...document, summary } });
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error generating dossier' } });
    }
};
exports.generateDossier = generateDossier;
const getDocuments = async (req, res) => {
    try {
        const documents = await prisma_1.default.document.findMany({
            where: { deletedAt: null },
            orderBy: { createdAt: 'desc' },
        });
        res.json({ data: documents });
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error fetching documents' } });
    }
};
exports.getDocuments = getDocuments;
