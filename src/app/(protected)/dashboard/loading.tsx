import { Loader } from "~/components/global/loader";

interface IProps {}

export default function DashboardLoading({}: IProps) {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader state>...Loading</Loader>
    </div>
  );
}
