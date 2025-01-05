import React from "react";

import {
  ContactsDuoToneBlue,
  HomeDuoToneBlue,
  RocketDuoToneBlue,
  AutomationDuoToneBlue,
} from "~/icons";

export const PAGE_BREADCRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type PageIconProps = {
  [page: string]: React.ReactNode;
};

export const PAGE_ICON: PageIconProps = {
  AUTOMATIONS: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <ContactsDuoToneBlue />,
  HOME: <HomeDuoToneBlue />,
};
