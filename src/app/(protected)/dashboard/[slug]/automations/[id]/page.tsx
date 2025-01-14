import { AutomationBreadcrumbs } from "~/components/global/breadcrumbs/automation-breadcrumbs";
import { Trigger } from "~/components/pages/automations/trigger";

import { Warning } from "~/icons";

interface IProps {
  params: { id: string };
}

export default function AutomationsIdPage({ params }: IProps) {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadcrumbs id={params.id} />
      <div className="flex w-full flex-col gap-y-3 rounded-xl bg-[#1d1d1d] p-5 lg:w-10/12 xl:w-6/12">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  );
}
