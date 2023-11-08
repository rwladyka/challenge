import { Order, PromotionType } from '../types';

/**
 * Apply promotions to the product based on the most recent promotion in the promotions array.
 *
 * @param {Object} order - The order object with properties like quantity and product with promotions.
 * @returns {string} The final formatted price of the ordered item after applying for the promotions.
 */
export const applyPromotions = (order: Order) => {
  const { quantity, product } = order;

  if (!product.promotions?.length) {
    return product.price * quantity;
  }

  let finalPrice = product.price * quantity;

  // Get the first (most recent) promotion from the promotions array
  const promotion = product.promotions[0];

  switch (promotion.type) {
    case PromotionType.BUY_X_GET_Y_FREE:
      if (promotion.required_qty <= quantity) {
        const totalSets = Math.floor(quantity / promotion.required_qty);
        const totalFreeItems = totalSets * promotion.free_qty!;
        finalPrice = product.price * (quantity - totalFreeItems);
      }
      break;
    case PromotionType.QTY_BASED_PRICE_OVERRIDE:
      if (promotion.required_qty <= quantity) {
        const totalSets = Math.floor(quantity / promotion.required_qty);
        finalPrice =
          totalSets * promotion.price + (quantity % promotion.required_qty) * product.price;
      }
      break;
    case PromotionType.FLAT_PERCENT:
      const discount = Math.floor((product.price * promotion.amount) / 100);
      finalPrice = (product.price - discount) * quantity;
      break;

    // Add more cases for other promotion types if needed
    default:
      // Unknown promotion type, ignore it
      break;
  }

  return finalPrice;
};
