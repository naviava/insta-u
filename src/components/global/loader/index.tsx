import React from "react";

import { Spinner } from "./spinner";
import { cn } from "~/lib/utils";

interface IProps {
  children: React.ReactNode;
  state: boolean;
  className?: string;
  color?: string;
}

export function Loader({ children, state, className, color }: IProps) {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
}
