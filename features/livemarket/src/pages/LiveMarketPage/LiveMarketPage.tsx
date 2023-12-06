'use client';

import { CollapsibleSection } from '@poc/component-collapsible-section';
import { OrdersTable } from '@poc/component-orders-table';
import { Order } from '@poc/domain-orders';
import { LiveActions } from '../../components/LiveActions';
import { useOrders } from '../../useOrders';

export interface LiveMarketPageProps {
  initialAcceptedOrders: Order[];
  initialLiveOrders: Order[];
  initialRecentActivity: Order[];
}

export function LiveMarketPage({
  initialAcceptedOrders,
  initialLiveOrders,
  initialRecentActivity,
}: LiveMarketPageProps) {
  const { acceptedOrders, liveOrders, onClickAccept, onClickIgnore } = useOrders(
    initialAcceptedOrders,
    initialLiveOrders
  );

  return (
    <main>
      <CollapsibleSection title="Accepted Orders">
        <OrdersTable orders={acceptedOrders} />
      </CollapsibleSection>
      <CollapsibleSection title="Live Demand">
        <OrdersTable
          orders={liveOrders}
          actions={(id: number) => <LiveActions id={id} onClickAccept={onClickAccept} onClickIgnore={onClickIgnore} />}
        />
      </CollapsibleSection>
      <CollapsibleSection title="Recent Activity">
        <OrdersTable orders={initialRecentActivity} />
      </CollapsibleSection>
    </main>
  );
}
