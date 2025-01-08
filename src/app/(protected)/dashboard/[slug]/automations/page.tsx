import { Check } from "lucide-react";

import { CreateAutomation } from "~/components/global/create-automation";
import { AutomationList } from "~/components/global/automation-list";

interface IProps {}

export default function AutomationsPage({}: IProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-y-6 overflow-hidden rounded-xl border-[1px] border-in-active bg-background-80 p-5">
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-text-secondary">
              Your live automations will be displayed here
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    Direct traffic towards website
                  </h3>
                  <p className="text-sm text-text-secondary">January 8, 2025</p>
                </div>
                <Check />
              </div>
            ))}
          </div>
          <CreateAutomation alwaysShowLabel />
        </div>
      </div>
    </div>
  );
}
