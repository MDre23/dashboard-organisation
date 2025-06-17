// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// Déclarez une variable globale pour PrismaClient afin d'éviter de créer plusieurs instances
// en développement (hot-reloading).
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma; // Exportez par défaut, pas comme membre nommé

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;