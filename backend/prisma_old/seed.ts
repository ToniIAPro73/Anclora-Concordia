import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing
  await prisma.activity.deleteMany({});
  await prisma.inquiry.deleteMany({});
  await prisma.document.deleteMany({});
  await prisma.property.deleteMany({});
  await prisma.lead.deleteMany({});
  await prisma.user.deleteMany({});

  // Users
  const agent = await prisma.user.create({
    data: {
      email: 'agent@anclora.com',
      name: 'Elena Valero',
      role: 'agent',
    },
  });

  // Properties
  await prisma.property.createMany({
    data: [
      {
        title: 'Villa Marítima Port d\'Andratx',
        description: 'Vistas panorámicas al mar, 6 dormitorios, piscina infinita.',
        type: 'VILLA',
        location: 'Port d\'Andratx, Mallorca',
        price: 8500000,
        status: 'AVAILABLE',
      },
      {
        title: 'Ático Premium Paseo Marítimo',
        description: 'Diseño minimalista, domótica de última generación.',
        type: 'APARTMENT',
        location: 'Palma de Mallorca',
        price: 2400000,
        status: 'AVAILABLE',
      },
      {
        title: 'Finca Tradicional Renovada',
        description: 'Privacidad absoluta en el corazón de la Tramuntana.',
        type: 'FINCA',
        location: 'Valldemossa, Mallorca',
        price: 4900000,
        status: 'RESERVED',
      },
    ],
  });

  // Sample Lead
  const lead = await prisma.lead.create({
    data: {
      firstName: 'Julian',
      lastName: 'Haupman',
      email: 'j.haupman@tech-invest.de',
      phone: '+49 152 445566',
      source: 'WEB_SOLICITUD',
      status: 'QUALIFIED',
      score: 92,
      scoringReason: 'Inversor recurrente con presupuesto > 5M€.',
      ownerId: agent.id,
      investorProfile: {
        create: {
          budgetMax: 10000000,
          budgetMin: 5000000,
          preferences: 'Villas con vistas al mar, diseño contemporáneo.',
          location: 'Andratx / Son Vida',
          language: 'EN',
        },
      },
    },
  });

  await prisma.activity.create({
    data: {
      leadId: lead.id,
      type: 'SYSTEM',
      content: 'Perfil inversor completado por IA.',
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
