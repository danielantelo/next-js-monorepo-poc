export interface Order {
  id: number;
  product: string;
  quality: string;
  grade: string;
  dispatch: Date;
  quantity: string;
  price: number;
  currency: 'EUR' | 'GBP';
  fishingMethod: string;
  variation: string;
  status?: 'ACCEPTED' | 'LIVE' | 'MISSED';
  country: string;
}
