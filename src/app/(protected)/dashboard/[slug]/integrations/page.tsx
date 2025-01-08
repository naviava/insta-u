import { IntegrationCard } from "~/components/pages/integrations/integration-card";
import { INTEGRATION_CARDS } from "~/constants/integrations";

interface IProps {}

export default function IntegrationsPage({}: IProps) {
  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col gap-y-5 lg:w-8/12">
        {INTEGRATION_CARDS.map((card, key) => (
          <IntegrationCard key={key} {...card} />
        ))}
      </div>
    </div>
  );
}
