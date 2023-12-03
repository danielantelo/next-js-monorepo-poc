import { Order } from '@rooser/domain-orders';
import { useState } from 'react';

export function useOrders(intitialAcceptedOrders: Order[] = [], initialLiveOrders: Order[] = []) {
  const [acceptedOrders, setAcceptedOrders] = useState<Order[]>(intitialAcceptedOrders);
  const [liveOrders, setLiveOrders] = useState<Order[]>(initialLiveOrders);

  const onClickAccept = (id: number) => {
    // @TODO post order acceptance to api
    // mutateLiveOrder(id, 'accept');
    // optimistically accept order on ui
    const matched: Order = liveOrders.find((curr: Order) => curr.id === id)!;
    setLiveOrders((prev) => prev?.filter((current: Order) => current.id !== matched.id));
    setAcceptedOrders((prev) => [...prev, { ...matched, status: 'ACCEPTED' }]);
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
