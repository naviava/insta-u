import { Bell } from "lucide-react";
import { Button } from "~/components/ui/button";

interface IProps {}

export function Notifications({}: IProps) {
  return (
    <Button className="rounded-full bg-white py-6">
      <Bell color="#3352cc" fill="#3352cc" />
    </Button>
  );
}
