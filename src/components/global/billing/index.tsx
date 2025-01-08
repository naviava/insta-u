import { PaymentCard } from "./payment-card";

interface IProps {}

export function Billing({}: IProps) {
  return (
    <div className="container flex w-full flex-col gap-5 lg:w-10/12 lg:flex-row xl:w-8/12">
      <PaymentCard />
    </div>
  );
}
