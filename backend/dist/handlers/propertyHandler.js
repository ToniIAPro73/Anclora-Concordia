"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyById = exports.getAllProperties = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const getAllProperties = async (req, res) => {
    try {
        const { status, type, minPrice, maxPrice } = req.query;
        const properties = await prisma_1.default.property.findMany({
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
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error fetching properties' } });
    }
};
exports.getAllProperties = getAllProperties;
const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await prisma_1.default.property.findUnique({
            where: { id },
        });
        if (!property)
            return res.status(404).json({ error: { message: 'Property not found' } });
        res.json({ data: property });
    }
    catch (error) {
        res.status(500).json({ error: { message: 'Error fetching property' } });
    }
};
exports.getPropertyById = getPropertyById;
