import { CollapsibleSection } from '@rooser/component-collapsible-section';
import { fetchAccepted, fetchLive, fetchRecent } from '@rooser/api-orders';
import { OrdersTable } from '@rooser/component-orders-table';

export async function LiveMarketPage() {
  const acceptedOrders = await fetchAccepted();
  const liveOrders = await fetchLive();
  const recentActivity = await fetchRecent();

  return (
    <main>
      <CollapsibleSection title="Accepted Orders">
        <OrdersTable orders={acceptedOrders} />
      </CollapsibleSection>
      <CollapsibleSection title="Live Demand">
        <OrdersTable orders={liveOrders} />
      </CollapsibleSection>
      <CollapsibleSection title="Recent Activity">
        <OrdersTable orders={recentActivity} />
      </CollapsibleSection>
    </main>
  );
}
