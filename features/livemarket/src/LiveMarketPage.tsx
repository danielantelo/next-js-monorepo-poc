import { CollapsibleSection } from '@rooser/component-collapsible-section';
import { OrdersTable } from '@rooser/component-orders-table';
import { Order } from '@rooser/domain-orders';
import { LiveActions } from './LiveActions';

export interface LiveMarketPageProps {
  acceptedOrders: Order[];
  liveOrders: Order[];
  recentActivity: Order[];
}

export function LiveMarketPage({ acceptedOrders, liveOrders, recentActivity }: LiveMarketPageProps) {
  return (
    <main>
      <CollapsibleSection title="Accepted Orders">
        <OrdersTable orders={acceptedOrders} />
      </CollapsibleSection>
      <CollapsibleSection title="Live Demand">
        <OrdersTable orders={liveOrders} ActionsComponent={LiveActions} />
      </CollapsibleSection>
      <CollapsibleSection title="Recent Activity">
        <OrdersTable orders={recentActivity} />
      </CollapsibleSection>
    </main>
  );
}
