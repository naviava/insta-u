import Link from "next/link";
import { SIDEBAR_MENU } from "~/constants/menu";
import { cn } from "~/lib/utils";

interface IProps {
  page: string;
  slug: string;
}

export function Items({ page, slug }: IProps) {
  return SIDEBAR_MENU.map((item) => (
    <Link
      key={item.id}
      href={`/dashboard/${slug}/${item.label === "home" ? "" : item.label}`}
      className={cn(
        "flex gap-x-2 rounded-full p-3 capitalize",
        page === item.label && "bg-[#0f0f0f]",
        page === slug && item.label === "home"
          ? "bg-[#0f0f0f]"
          : "text-[#9b9ca0]",
      )}
    >
      {item.icon}
      {item.label}
    </Link>
  ));
}
