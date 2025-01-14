import { Loader } from "~/components/global/loader";
import { Button } from "~/components/ui/button";

import { ActiveAutomation } from "~/icons/active-automation";

interface IProps {}

export function ActivateAutomationButton({}: IProps) {
  return (
    <Button className="ml-4 rounded-full bg-gradient-to-br from-[#3352cc] to-[#1c2d70] font-medium text-white hover:opacity-80 lg:px-10">
      <Loader state={false}>
        <ActiveAutomation />
        <p className="hidden lg:inline">Activate</p>
      </Loader>
    </Button>
  );
}
