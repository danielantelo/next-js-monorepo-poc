import { Order } from '@rooser/domain-orders';

// NOTE: api interfaces, fetchers and mutators can be generated from published OpenAPI schemas
// we should only have to maintain our interfaces and data mappers

const baseUrl = process.env.API_HOST || 'http://localhost:3000';

interface ApiOrder {
  id: number;
  status?: 'ACCEPTED' | 'NOT_ACCEPTED' | 'MISSED';
  price: number;
  quantity: number | string;
  quality: string;
  grade: string;
  dispatchDate?: string;
  fishingMethod: string;
  country: string;
  currency: string;
  sku: {
    nature: 'frozen' | 'cooked' | 'alive clean' | 'alive brut' | 'raw' | 'fresh';
    species: string;
    type: string;
    variation: string;
  };
  packing?: {
    id: number;
    unit: number;
    label: string;
    amount: number;
  };
}

interface ApiActivity extends Omit<ApiOrder, 'dispatchDate' | 'status' | 'packing'> {
  dispatch_date?: string;
}

interface ApiResponse {
  results: ApiOrder[];
}

function apiMapper(curr: ApiOrder & ApiActivity): Order {
  const dispatch: string = (curr.dispatchDate || curr['dispatch_date'])!;
  return {
    id: curr.id,
    product: curr.sku.species,
    quality: curr.quality,
    grade: curr.grade,
    dispatch: new Date(dispatch),
    quantity: `${curr.quantity.toString()} boxes`,
    price: curr.price,
    currency: <'GBP' | 'EUR'>curr.currency,
    fishingMethod: curr.fishingMethod,
    variation: curr.sku.variation,
    status: curr.status === 'NOT_ACCEPTED' ? 'LIVE' : curr.status,
    country: curr.country,
  };
}

export async function fetchAccepted(): Promise<Order[]> {
  const request = await fetch(`${baseUrl}/api/accepted_orders.json`);
  const response: ApiResponse = await request.json();
  return response.results.map(apiMapper);
}

export async function fetchLive(): Promise<Order[]> {
  const request = await fetch(`${baseUrl}/api/live_demand.json`);
  const response: ApiResponse = await request.json();
  return response.results.map(apiMapper);
}

export async function fetchRecent(): Promise<Order[]> {
  const request = await fetch(`${baseUrl}/api/recent_activity.json`);
  const response: ApiActivity[] = await request.json();
  return response.map(apiMapper);
}

export async function getOrders() {
  const [acceptedOrders, liveOrders, recentActivity] = await Promise.all([fetchAccepted(), fetchLive(), fetchRecent()]);

  return {
    acceptedOrders,
    liveOrders,
    recentActivity,
  };
}
