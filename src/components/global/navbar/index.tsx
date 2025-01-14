"use client";

import { PAGE_BREADCRUMBS } from "~/constants/pages";
import { usePath } from "~/hooks/user-nav";
import { Menu } from "lucide-react";

import { MainBreadcrumb } from "~/components/global/breadcrumbs/main-breadcrumb";
import { SubscriptionPlan } from "~/components/global/subscription-plan";
import { CreateAutomation } from "~/components/global/create-automation";
import { UpgradeCard } from "~/components/global/sidebar/upgrade-card";
import { ClerkAuthState } from "~/components/global/clerk-auth-state";
import { Notifications } from "~/components/global/notifications";
import { Items } from "~/components/global/sidebar/items";
import { LogoSmall } from "~/components/svg/logo-small";
import { Separator } from "~/components/ui/separator";
import { Search } from "~/components/global/search";
import { Sheet } from "~/components/global/sheet";

import { HelpDuoToneWhite } from "~/icons";

interface IProps {
  slug: string;
}

export function Navbar({ slug }: IProps) {
  const { page } = usePath();
  const currentPage = PAGE_BREADCRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex items-center justify-end gap-x-3 lg:gap-x-5">
          <span className="flex flex-1 items-center gap-x-2 lg:hidden">
            <Sheet trigger={<Menu />} side="left" className="lg:hidden">
              <div className="backdrop--blur__safari flex h-full w-full flex-col gap-y-5 bg-[#0E0E0E] bg-opacity-90 bg-clip-padding p-3 backdrop-blur-3xl backdrop-filter">
                <div className="flex items-center justify-center gap-x-2 p-5">
                  <LogoSmall />
                </div>
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug} />
                </div>
                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  />
                </div>
                <div className="flex flex-col gap-y-5 px-3">
                  <div className="flex gap-x-2">
                    <ClerkAuthState />
                  </div>
                  <div className="flex gap-x-3">
                    <HelpDuoToneWhite />
                    <span className="text-[#9b9ca0]">Help</span>
                  </div>
                </div>
                <SubscriptionPlan type="FREE">
                  <div className="flex flex-1 flex-col justify-end">
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadcrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
}
