"use client";

import { PAGE_BREADCRUMBS } from "~/constants/pages";
import { usePath } from "~/hooks/user-nav";

import { Sheet } from "~/components/global/sheet";

interface IProps {
  slug: string;
}

export function Navbar({ slug }: IProps) {
  const { page } = usePath();
  const currentPage = PAGE_BREADCRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex justify-end gap-x-3 lg:gap-x-5">
          <span className="flex flex-1 items-center gap-x-2 lg:hidden">
            <Sheet className="lg:hidden"></Sheet>
          </span>
        </div>
      </div>
    )
  );
}
