import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const generateDossier = async (req: Request, res: Response) => {
  try {
    const propertyId = req.body.propertyId as string;
    const leadId = req.body.leadId as string;

    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property) return res.status(404).json({ error: { message: 'Property not found' } });

    // AI Summary logic (Mocked following rules)
    const summary = `Exclusiva villa en ${property.location} con acabados de alta gama y diseño mediterráneo. Ideal para inversores buscando rentabilidad y prestigio.`;
    const aiMetadata = {
      model: "concordia-docs-v1",
      confidence: 0.98,
      sourceFragments: ["vistas al mar", "piscina infinita", "6 dormitorios"],
      generatedAt: new Date().toISOString(),
    };

    const document = await prisma.document.create({
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
    await prisma.activity.create({
      data: {
        leadId: leadId || '',
        type: 'SYSTEM',
        content: `Documento generado por IA: ${document.title}`,
        metadata: JSON.stringify({ summary, ...aiMetadata }),
      },
    });

    res.status(201).json({ data: { ...document, summary } });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error generating dossier' } });
  }
};

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await prisma.document.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: documents });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error fetching documents' } });
  }
};
