const symbols = {
  EUR: '€',
  GBP: '£',
};

export function formatAmount(amount: number, currency: 'EUR' | 'GBP' = 'EUR'): string {
  return `${symbols[currency]}${amount.toFixed(2)}`;
}
