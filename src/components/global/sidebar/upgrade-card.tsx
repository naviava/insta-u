import { PaymentButton } from "~/components/global/payment-button";

interface IProps {}

export function UpgradeCard({}: IProps) {
  return (
    <div className="flex flex-col gap-y-3 rounded-2xl bg-[#252525] p-3">
      <span className="text-sm">
        Upgrade to{" "}
        <span className="bg-gradient-to-r from-[#cc3bd4] to-[#d064ac] bg-clip-text font-bold text-transparent">
          Smart AI
        </span>
      </span>
      <p className="text-sm font-light text-[#9b9ca0]">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
  );
}
