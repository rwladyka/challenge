import { useContext, useState } from 'react';
import { formatPounds } from '../../shared/money';
import { Order, Product } from '../../types';
import QuantitySelector from '../QuantitySelector';
import {
  ProductCardFooter,
  StyledBuyButton,
  StyledProductCard,
  StyledProductInfo,
} from './ProductCard.styled';
import { OrderContext } from '../OrderContextProvider';
import Loading from '../BasicComponents/Loading';
import { storeOrder } from '../../shared/storage';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [loading, setLoading] = useState(false);
  const [qtyToBuy, setQtyToBuy] = useState(1);
  const { order, setOrder } = useContext(OrderContext);

  const updateOrder = (newOrder: Order[]) => {
    setOrder(newOrder);
    setQtyToBuy(1);
    setLoading(false);
    storeOrder(newOrder);
  };

  const handleBuy = async () => {
    setLoading(true);
    const newOrder = [...order];

    const orderIndex = order.findIndex((ord) => ord.product.id === product.id);
    if (orderIndex >= 0) {
      newOrder[orderIndex].quantity = newOrder[orderIndex].quantity + qtyToBuy;
      updateOrder(newOrder);
      return;
    }

    const res = await fetch(`/api/products/${product.id}`);
    const json = await res.json();

    newOrder.push({
      quantity: qtyToBuy,
      product: json,
    });

    updateOrder(newOrder);
  };

  return (
    <StyledProductCard>
      <StyledProductInfo>
        <span>{product.name}</span>
        <span>{formatPounds(product.price)}</span>
      </StyledProductInfo>
      <ProductCardFooter>
        <QuantitySelector quantity={qtyToBuy} onChange={setQtyToBuy} />
        <StyledBuyButton onClick={handleBuy} data-testid="btn-add-to-cart">
          {loading ? <Loading /> : 'Add to Cart'}
        </StyledBuyButton>
      </ProductCardFooter>
    </StyledProductCard>
  );
};

export default ProductCard;
