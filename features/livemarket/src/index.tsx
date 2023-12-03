import { getOrders } from '@rooser/api-orders';
import { LiveMarketPage } from './LiveMarketPage';

export default async function LiveMarketPageContainer() {
  // fetch server side and serve
  const { acceptedOrders, liveOrders, recentActivity } = await getOrders();
  return (
    <LiveMarketPage
      initialAcceptedOrders={acceptedOrders}
      initialLiveOrders={liveOrders}
      initialRecentActivity={recentActivity}
    />
  );
}
