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

interface ICreateUserProps {
  clerkId: string;
  firstname: string;
  lastname: string;
  email: string;
}
export async function createUser({
  clerkId,
  email,
  firstname,
  lastname,
}: ICreateUserProps) {
  return await db.user.create({
    data: {
      clerkId,
      firstname,
      lastname,
      email,
      subscription: {
        create: {},
      },
    },
    select: {
      firstname: true,
      lastname: true,
    },
  });
}
