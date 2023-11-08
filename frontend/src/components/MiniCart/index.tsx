import { useContext, useMemo, useState } from 'react';
import { StyledCountBadge, StyledIcon, StyledMiniCart } from './Minicart.styled';
import { Order } from '../../types';
import { OrderContext } from '../OrderContextProvider';
import Preview from './Preview';
import OutsideClick from '../BasicComponents/ClickOutside';
import Icon from './Icon';

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { order } = useContext(OrderContext);

  const qtyItems = useMemo(() => {
    return order.reduce((acc: number, curr: Order) => acc + curr.quantity, 0);
  }, [order]);

  return (
    <OutsideClick onClickOutside={() => setIsOpen(false)}>
      <StyledMiniCart onClick={() => setIsOpen(true)} data-testid="minicart">
        <StyledIcon>
          <Icon />
        </StyledIcon>
        <StyledCountBadge>{qtyItems}</StyledCountBadge>
        {qtyItems > 0 && isOpen && <Preview />}
      </StyledMiniCart>
    </OutsideClick>
  );
};

export default MiniCart;
