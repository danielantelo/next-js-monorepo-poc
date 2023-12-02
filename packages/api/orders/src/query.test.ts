import { fetchAccepted, fetchLive, fetchRecent } from './query';
import acceptedMock from '../__fixtures__/accepted_orders.json';
import liveMock from '../__fixtures__/live_demand.json';
import recentMock from '../__fixtures__/recent_activity.json';

describe('fetchAcceptedOrders', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetches accepted orders', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(acceptedMock),
        }) as Promise<Response>
    );
    const response = await fetchAccepted();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/accepted_orders.json');
    expect(response.length).toBe(2);
    expect(response[0]).toEqual({
      id: 5,
      price: 9.5,
      curency: undefined, // @TODO check this missing
      quantity: '99 boxes',
      quality: 'E',
      country: 'ENG',
      fishingMethod: 'dredges',
      grade: '2-3Kg',
      product: 'Cod',
      status: 'ACCEPTED',
      variation: 'skin on',
      dispatch: new Date('2023-09-25T13:30:00.000Z'),
    });
  });

  it('fetches live demand orders', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(liveMock),
        }) as Promise<Response>
    );
    const response = await fetchLive();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/live_demand.json');
    expect(response.length).toBe(3);
    expect(response[0]).toEqual({
      country: null,
      dispatch: new Date('2023-09-26T13:30:00.000Z'),
      fishingMethod: 'farmed',
      grade: '2-3Kg',
      id: 9,
      price: 11.44,
      curency: undefined, // @TODO check this missing
      product: 'Shrimp (black tiger )',
      quality: 'A+',
      quantity: '83 boxes',
      status: 'LIVE',
      variation: 'cooked',
    });
  });

  it('fetches recent activity', async () => {
    global.fetch = jest.fn().mockImplementationOnce(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(recentMock),
        }) as Promise<Response>
    );
    const response = await fetchRecent();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/recent_activity.json');
    expect(response.length).toBe(4);
    expect(response[0]).toEqual({
      country: 'FRA',
      dispatch: new Date('2023-09-21T23:00:00.000Z'),
      fishingMethod: undefined,
      grade: '100/120 pc/kg',
      id: 158,
      price: 9.12,
      currency: 'EUR',
      product: 'Mussel St Michel',
      quality: 'E',
      quantity: '<100 boxes',
      status: undefined,
      variation: 'alive clean',
    });
  });
});
