import { Order } from '@poc/domain-orders';

export const mockedOrders: Order[] = [
  {
    id: 5,
    product: 'Salmon filet',
    quality: 'A+',
    grade: '100-150g',
    quantity: '10 boxes',
    dispatch: new Date('2023-11-30'),
    price: 21.99,
    fishingMethod: 'trawls',
    variation: 'cooked',
    status: 'ACCEPTED',
    country: 'ENG',
    currency: 'EUR',
  },
  {
    id: 9,
    product: 'Tuna filet',
    quality: 'A+',
    grade: '100-150g',
    quantity: '10 boxes',
    dispatch: new Date('2023-11-30'),
    price: 21.99,
    fishingMethod: 'trawls',
    variation: 'cooked',
    status: 'ACCEPTED',
    country: 'ENG',
    currency: 'EUR',
  },
];
