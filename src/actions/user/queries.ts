"use server";

import { db } from "~/lib/db";

export async function findUser(clerkId: string) {
  return await db.user.findUnique({
    where: { clerkId },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
}
