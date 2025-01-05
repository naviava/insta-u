import React from "react";

import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";

interface IProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  side: "left" | "right";
  className?: string;
}

export function Sheet({ children, trigger, side, className }: IProps) {
  return (
    <ShadcnSheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent side={side} className="p-0">
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
}
