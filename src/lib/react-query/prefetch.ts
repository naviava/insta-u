import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { onUserInfo } from "~/actions/user";

async function prefetch(
  client: QueryClient,
  action: QueryFunction,
  key: string,
) {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
}

export async function prefetchUserProfile(client: QueryClient) {
  return await prefetch(client, onUserInfo, "user-profile");
}
