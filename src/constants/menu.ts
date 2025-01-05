import React from "react";
import { v4 as uuid } from "uuid";

type FieldProps = {
  id: string;
  label: string;
};

type SidebarProps = {
  icon: React.ReactNode;
} & FieldProps;

// export const SIDEBAR_MENU: SidebarProps[] = [
//   {
//     id: uuid(),
//     label: "home",
//     icon:
//   },
// ];
