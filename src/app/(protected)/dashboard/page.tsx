import { redirect } from "next/navigation";
import { onBoardUser } from "~/actions/user";

interface IProps {}

export default async function DashboardPage({}: IProps) {
  const user = await onBoardUser();
  if (user.status === 200 || user.status === 201) {
    return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }

  return redirect("/sign-in");
}
