import { SearchIcon } from "lucide-react";
import { Input } from "~/components/ui/input";

interface IProps {}

export function Search({}: IProps) {
  return (
    <div className="hidden flex-1 items-center gap-x-2 overflow-hidden rounded-full border-[1px] border-[#3352cc] px-4 py-1 lg:flex">
      <SearchIcon color="#3352cc" />
      <Input
        placeholder="Search by name, email or status"
        className="flex-1 border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0"
      />
    </div>
  );
}
