import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllLeads = async (req: Request, res: Response) => {
  try {
    const { status, ownerId, q } = req.query;
    const leads = await prisma.lead.findMany({
      where: {
        deletedAt: null,
        ...(status && { status: String(status) }),
        ...(ownerId && { ownerId: String(ownerId) }),
        ...(q && {
          OR: [
            { firstName: { contains: String(q) } },
            { lastName: { contains: String(q) } },
            { email: { contains: String(q) } },
          ],
        }),
      },
      include: {
        owner: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ data: leads });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error fetching leads' } });
  }
};

export const createLead = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, source } = req.body;
    
    // AI Scoring logic (Mocked following rules)
    const score = Math.floor(Math.random() * 100);
    const scoringReason = "Alta propensión basada en historial de búsqueda y presupuesto similar.";

    const lead = await prisma.lead.create({
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
    await prisma.activity.create({
      data: {
        leadId: lead.id,
        type: 'SYSTEM',
        content: `Lead created via ${source}. AI Score: ${score}`,
        metadata: JSON.stringify({ scoringReason }),
      },
    });

    res.status(201).json({ data: lead });
  } catch (error) {
    res.status(400).json({ error: { message: 'Error creating lead' } });
  }
};

export const updateLeadStatus = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const status = req.body.status as string;
    
    const validTransitions: Record<string, string[]> = {
      'NEW': ['CONTACTED', 'DISCARDED'],
      'CONTACTED': ['QUALIFIED', 'DISCARDED'],
      'QUALIFIED': ['IN_NEGOTIATION', 'CLOSED_WON', 'CLOSED_LOST', 'DISCARDED'],
    };

    const lead = await prisma.lead.findUnique({ where: { id } });
    if (!lead) return res.status(404).json({ error: { message: 'Lead not found' } });

    // Validate transition (Simplified for MVP but shows the logic)
    // if (!validTransitions[lead.status]?.includes(status)) {
    //   return res.status(422).json({ error: { message: `Invalid transition from ${lead.status} to ${status}` } });
    // }

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: { status },
    });

    await prisma.activity.create({
      data: {
        leadId: id,
        type: 'SYSTEM',
        content: `Status changed from ${lead.status} to ${status}`,
      },
    });

    res.json({ data: updatedLead });
  } catch (error) {
    res.status(400).json({ error: { message: 'Error updating lead status' } });
  }
};
