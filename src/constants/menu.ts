import React from "react";
import { v4 as uuid } from "uuid";

import { HomeDuoToneWhite } from "~/icons/home-duo-tone-white";
import { AutomationDuoToneWhite } from "~/icons/automation-duotone-white";

type FieldProps = {
  id: string;
  label: string;
};

type SidebarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SidebarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />
  },
];
