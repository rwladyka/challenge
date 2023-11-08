const Pounds = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'GBP',
});

export const formatPounds = (price: number) => Pounds.format(price / 100);
