import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface IProps {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
}

export function GradientButton({ children, type, href, className }: IProps) {
  const gradients =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]";

  switch (type) {
    case "BUTTON":
      return (
        <div className={gradients}>
          <Button
            className={cn("rounded-xl", className)}
            onClick={(e) => {
              e.stopPropagation();
              alert("Hello World");
            }}
          >
            {children}
          </Button>
        </div>
      );

    case "LINK":
      if (!href) return null;
      return (
        <div className={gradients}>
          <Link href={href} className={cn("rounded-xl", className)}>
            {children}
          </Link>
        </div>
      );

    default:
      return null;
  }

  return <div>GradientButton </div>;
}
