import { formatPounds } from './money';

describe('formatPounds', () => {
  test.each([
    [199, '£1.99'],
    [288, '£2.88'],
    [3598, '£35.98'],
    [4697, '£46.97'],
  ])('should format money in pennies to correctly pounds format', (value, expected) => {
    expect(formatPounds(value)).toBe(expected);
  });
});
