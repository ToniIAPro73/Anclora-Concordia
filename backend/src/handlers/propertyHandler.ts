import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const { status, type, minPrice, maxPrice } = req.query;
    const properties = await prisma.property.findMany({
      where: {
        deletedAt: null,
        ...(status && { status: String(status) }),
        ...(type && { type: String(type) }),
        price: {
          ...(minPrice && { gte: Number(minPrice) }),
          ...(maxPrice && { lte: Number(maxPrice) }),
        },
      },
      orderBy: { price: 'desc' },
    });
    res.json({ data: properties });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error fetching properties' } });
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const property = await prisma.property.findUnique({
      where: { id },
    });
    if (!property) return res.status(404).json({ error: { message: 'Property not found' } });
    res.json({ data: property });
  } catch (error) {
    res.status(500).json({ error: { message: 'Error fetching property' } });
  }
};
