import { CircleCheck } from "lucide-react";
import { Button } from "~/components/ui/button";
import { PLANS } from "~/constants/pages";
import { cn } from "~/lib/utils";

type PlanType = "PRO" | "FREE";

interface IProps {
  label: PlanType;
  current: PlanType;
  landing?: boolean;
}

export function PaymentCard({ label, current, landing }: IProps) {
  return (
    <div
      className={cn(
        "h-fit overflow-hidden rounded-xl p-[2px]",
        label !== current
          ? "bg-in-active"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      )}
    >
      <div
        className={cn(
          "flex flex-col rounded-xl bg-background-90 py-5 pl-5 pr-10",
          landing && "radial--gradient-pink",
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}
          </h2>
        )}
        <p className="mb-2 text-sm text-text-secondary">
          This is what your plan covers for automations and AI features.
        </p>

        {label === "PRO" ? (
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="mt-2 font-bold text-text-secondary">Standard</p>
        )}

        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-xl">$99</b>
          </p>
        ) : (
          <p className="mb-2 text-xl">Free</p>
        )}

        {PLANS[label === "PRO" ? 1 : 0].features.map((feat, idx) => (
          <p key={idx} className="mt-2 flex gap-2 text-muted-foreground">
            <CircleCheck className="text-indigo-500" />
            {feat}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              "mt-5 rounded-full",
              label === "PRO"
                ? "to pink-500 bg-gradient-to-r from-indigo-500 via-purple-500 text-white"
                : "bg-background-80 text-white hover:text-background-80",
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
                ? "Free"
                : "Get Started"}
          </Button>
        ) : (
          <Button
            disabled={label === current}
            className="mt-5 rounded-full bg-background-80 text-white hover:text-background-80"
          >
            {label === current
              ? "Active"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
}
