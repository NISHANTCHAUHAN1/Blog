import { PrismaClient } from "@prisma/client";

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance and reuse it in development to avoid
// exhausting database connections when Next.js hot-reloads modules.
export const prisma: PrismaClient = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// Backwards-compat export for any existing imports using the previous name.
export const primsa = prisma;