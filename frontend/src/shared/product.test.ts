import {
  mockProduct,
  mockProductWithFlatPercent,
  mockProductWithGetFree,
  mockProductWithPriceOverride,
} from '../mocks/mocks';
import { applyPromotions } from './product';

describe('applyPromotions', () => {
  it('should return the original price if no promotions are provided', () => {
    expect(applyPromotions({ quantity: 1, product: mockProduct })).toBe(999);
  });

  test.each([
    [2, 1799],
    [3, 2898],
    [4, 3598],
    [5, 4697],
  ])('should apply QTY_BASED_PRICE_OVERRIDE promotion correctly', (quantity, expected) => {
    expect(applyPromotions({ quantity, product: mockProductWithPriceOverride })).toBe(expected);
  });

  test.each([
    [2, 999],
    [3, 1998],
    [4, 1998],
    [5, 2997],
    [6, 2997],
  ])('should apply BUY_X_GET_Y_FREE promotion correctly', (quantity, expected) => {
    expect(applyPromotions({ quantity, product: mockProductWithGetFree })).toBe(expected);
  });

  test.each([
    [2, 900],
    [3, 1350],
    [4, 1800],
    [5, 2250],
    [6, 2700],
  ])('should apply FLAT_PERCENT promotion correctly', (quantity, expected) => {
    expect(applyPromotions({ quantity, product: mockProductWithFlatPercent })).toBe(expected);
  });
});
