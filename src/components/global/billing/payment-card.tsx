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
        "overflow-hidden rounded-xl p-[2px]",
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
      </div>
    </div>
  );
}
