"use server";

import { redirect } from "next/navigation";

import { updateIntegration } from "~/actions/integrations";
import { currentUser } from "@clerk/nextjs/server";
import { refreshToken } from "~/lib/fetch";

import { findUser } from "./queries";

export async function onCurrentUser() {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
}

export async function onBoardUser() {
  const user = await onCurrentUser();

  try {
    const found = await findUser(user.id);
    /**
     * Check the user's instragram refresh access token.
     * Token needs to be refreshed in order to use the integrations feature.
     */
    if (found?.integrations && found?.integrations.length > 0) {
      const today = new Date();
      const timeLeft =
        found.integrations[0].expiresAt?.getTime()! - today.getTime();

      const days = Math.round(timeLeft / (1000 * 3600 * 24));
      if (days < 5) {
        console.log("Refresh");
        const refresh = await refreshToken(found.integrations[0].token);

        const today = new Date();
        const expireDate = today.setDate(today.getDate() + 60);

        // const updateToken = await updateIntegration();
      }
    }
  } catch (error) {}
}
