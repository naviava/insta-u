import { Loader } from "~/components/global/loader";
import { Button } from "~/components/ui/button";
import { AutomationDuoToneWhite } from "~/icons";
import { cn } from "~/lib/utils";

interface IProps {
  alwaysShowLabel?: boolean;
}

export function CreateAutomation({ alwaysShowLabel }: IProps) {
  return (
    <Button className="rounded-full bg-gradient-to-br from-[#3352cc] to-[#1c2d70] py-6 font-medium text-white hover:opacity-80 lg:px-10">
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className={cn("hidden lg:inline", alwaysShowLabel && "inline")}>
          Create an Automation
        </p>
      </Loader>
    </Button>
  );
}
