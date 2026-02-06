import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const leadId = req.body.leadId as string;
    const propertyId = req.body.propertyId as string;
    const message = req.body.message as string;

    const inquiry = await prisma.inquiry.create({
      data: {
        leadId,
        propertyId,
        message,
        status: 'OPEN',
      },
    });

    // Audit activity
    await prisma.activity.create({
      data: {
        leadId,
        type: 'SYSTEM',
        content: `Nueva consulta creada para la propiedad ${propertyId}`,
      },
    });

    res.status(201).json({ data: inquiry });
  } catch (error) {
    res.status(400).json({ error: { message: 'Error creating inquiry' } });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      include: {
        lead: { select: { firstName: true, lastName: true, email: true } },
        property: { select: { title: true, price: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: inquiries });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error fetching inquiries' } });
  }
};
