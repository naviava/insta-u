import React from "react";

interface IProps {
  children: React.ReactNode;
  type: "FREE" | "PRO";
}

export function SubscriptionPlan({ children, type }: IProps) {
  return children;
}
