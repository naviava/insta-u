import React from "react";

import { IntegrationCardProps } from "~/constants/integrations";
import { Button } from "~/components/ui/button";

export function IntegrationCard({
  title,
  description,
  icon,
  strategy,
}: IntegrationCardProps) {
  return (
    <div className="flex items-center justify-between gap-x-5 rounded-2xl border-2 border-[#3352cc] p-5">
      {icon}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="w-full text-base text-[#9d9d9d] md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="rounded-full bg-gradient-to-br from-[#3352cc] to-[#1c2d70] text-lg text-white transition duration-100 hover:opacity-70"
      >
        Connect
        {/* {integrated ? "Connected" : "Connect"} */}
      </Button>
    </div>
  );
}
