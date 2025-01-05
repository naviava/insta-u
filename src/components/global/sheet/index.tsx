import React from "react";

import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";

interface IProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
}

export function Sheet({ children, trigger, className }: IProps) {
  return (
    <ShadcnSheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent>{children}</SheetContent>
    </ShadcnSheet>
  );
}
