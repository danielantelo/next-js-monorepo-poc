import { getOrders } from '@rooser/api-orders';
import { Order } from '@rooser/domain-orders';
import { useEffect, useState } from 'react';

export function useOrders() {
  const [acceptedOrders, setAcceptedOrders] = useState<Order[]>([]);
  const [liveOrders, setLiveOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetch() {
      const { acceptedOrders, liveOrders } = await getOrders();
      setAcceptedOrders(acceptedOrders);
      setLiveOrders(liveOrders);
    }
    fetch();
  }, []);

  const onClickAccept = (id: number) => {
    // @TODO post order acceptance to api
    // mutateLiveOrder(id, 'accept');
    // optimistically accept order on ui
    const matched: Order = liveOrders.find((curr: Order) => curr.id === id)!;
    setLiveOrders((prev) => prev?.filter((current: Order) => current.id !== matched.id));
    setAcceptedOrders((prev) => ({ ...prev, matched }));
  };

  const onClickIgnore = (id: number) => {
    // @TODO post order ignore to api
    // mutateLiveOrder(id, 'ignore');
    // optimistically ignore order on ui
    setLiveOrders((prev) => prev?.filter((current: Order) => current.id !== id));
  };

  return {
    acceptedOrders,
    liveOrders,
    onClickAccept,
    onClickIgnore,
  };
}
