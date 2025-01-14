import { ChevronRight, PencilIcon } from "lucide-react";
import { ActivateAutomationButton } from "~/components/global/activate-automation-button";

interface IProps {
  id: string;
}

export function AutomationBreadcrumbs({ id }: IProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-full bg-[#181b1a] p-5">
      <div className="flex min-w-0 items-center gap-x-3">
        <p className="text-[#9b9ca0 truncate">Automations</p>
        <ChevronRight color="#9b9ca0 flex-shrink-0" />
        <span className="flex min-w-0 items-center gap-x-3">
          <p className="truncate text-[#9b9ca0]">
            This is the automation title
          </p>
          <span className="mr-4 flex-shrink-0 cursor-pointer transition duration-100 hover:opacity-75">
            <PencilIcon size={14} color="#9b9ca0" />
          </span>
        </span>
      </div>
      <div className="ml-auto flex gap-x-5">
        <p className="hidden min-w-0 truncate text-sm text-text-secondary/60 md:block">
          All pastes are automatically saved
        </p>
        <div className="flex flex-shrink-0 gap-x-5">
          <p className="min-w-0 truncate text-sm text-text-secondary">
            Changes saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
}
