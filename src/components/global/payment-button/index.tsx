import { Button } from "~/components/ui/button";

interface IProps {}

export function PaymentButton({}: IProps) {
  return (
    <Button className="rounded-full bg-gradient-to-br from-[#9685db] via-[#9434e6] to-[#cc3bd4] font-bold text-white">
      Upgrade
    </Button>
  );
}
