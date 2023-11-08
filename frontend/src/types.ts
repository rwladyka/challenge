export type Product = {
  id: string;
  name: string;
  price: number;
  promotions?: Promotion[];
};

export type Promotion =
  | Promotion_BUY_X_GET_Y_FREE
  | Promotion_PRICE_OVERRIDE
  | Promotion_FLAT_PERCENT;

type Promotion_BUY_X_GET_Y_FREE = {
  id: string;
  type: PromotionType.BUY_X_GET_Y_FREE;
  required_qty: number;
  free_qty?: number;
};

type Promotion_PRICE_OVERRIDE = {
  id: string;
  type: PromotionType.QTY_BASED_PRICE_OVERRIDE;
  required_qty: number;
  price: number;
};

type Promotion_FLAT_PERCENT = {
  id: string;
  type: PromotionType.FLAT_PERCENT;
  amount: number;
};

export type Order = {
  quantity: number;
  product: Product;
};

export enum PromotionType {
  BUY_X_GET_Y_FREE = 'BUY_X_GET_Y_FREE',
  QTY_BASED_PRICE_OVERRIDE = 'QTY_BASED_PRICE_OVERRIDE',
  FLAT_PERCENT = 'FLAT_PERCENT',
}
