import { primsa, prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const LayoutDb = async({children}: {children: React.ReactNode}) => {
    const user = await currentUser();

    if(!user) return null;
    try {
        // Use upsert to create or update the user in one atomic call.
        const email = user.emailAddresses?.[0]?.emailAddress ?? undefined;

        await prisma.user.upsert({
            where: { clerkUserId: user.id },
            update: {
                name: user.fullName ?? undefined,
                email: email ?? undefined,
                imageUrl: user.imageUrl ?? undefined,
            },
            create: {
                clerkUserId: user.id,
                name: user.fullName ?? '',
                email: email ?? '',
                imageUrl: user.imageUrl ?? null,
            },
        });
    } catch (err) {
        // Log details so failures are visible in server logs during development.
        // In production, consider using a structured logger.
        // eslint-disable-next-line no-console
        console.error('Failed to upsert Clerk user in DB', {
            clerkUserId: user.id,
            email: user.emailAddresses?.[0]?.emailAddress,
            error: err,
        });
    }
  return (
    <div>{children}</div>
  )
}

export default LayoutDb