import { Promotion, PromotionType } from '../types';

export const mockProduct = {
  id: 'PWWe3w1SDU',
  name: 'Amazing Burger!',
  price: 999,
  promotions: [],
};

export const mockProductWithPriceOverride = {
  id: 'Dwt5F7KAhi',
  name: 'Amazing Pizza!',
  price: 1099,
  promotions: [
    {
      id: 'ibt3EEYczW',
      type: PromotionType.QTY_BASED_PRICE_OVERRIDE,
      required_qty: 2,
      price: 1799,
    } as Promotion,
  ],
};

export const mockProductWithGetFree = {
  ...mockProduct,
  promotions: [
    {
      id: 'ZRAwbsO2qM',
      type: PromotionType.BUY_X_GET_Y_FREE,
      required_qty: 2,
      free_qty: 1,
    } as Promotion,
  ],
};

export const mockProductWithFlatPercent = {
  id: 'C8GDyLrHJb',
  name: 'Amazing Salad!',
  price: 499,
  promotions: [
    {
      id: 'Gm1piPn7Fg',
      type: PromotionType.FLAT_PERCENT,
      amount: 10,
    } as Promotion,
  ],
};

export const mockOrder = [
  {
    quantity: 1,
    product: mockProduct,
  },
];
