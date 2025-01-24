"use server";

import { db } from "~/lib/db";

interface IUpdateIntegrationProps {
  token: string;
  expiresAt: Date;
  id: string;
}

export async function updateIntegration({
  id,
  expiresAt,
  token,
}: IUpdateIntegrationProps) {
  return await db.integrations.update({
    where: { id },
    data: {
      token,
      expiresAt,
    },
  });
}
