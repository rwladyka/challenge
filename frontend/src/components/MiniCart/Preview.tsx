import { useContext, useMemo, useState } from 'react';
import { OrderContext } from '../OrderContextProvider';
import {
  PreviewItemWrapper,
  PreviewTotalRow,
  PreviewTotalWrapper,
  PreviewWrapper,
  StyledSubmitOrder,
} from './Minicart.styled';
import { applyPromotions } from '../../shared/product';
import { formatPounds } from '../../shared/money';
import SweetAlert2 from 'react-sweetalert2';
import { clearOrder } from '../../shared/storage';

const Preview = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [showAlert, setShowAlert] = useState(false);

  const totals = useMemo(
    () =>
      order.reduce(
        (acc, curr) => {
          const price = curr.product.price * curr.quantity;
          const saved = price - applyPromotions(curr);
          return {
            full: acc.full + price,
            saved: acc.saved + saved,
            payable: acc.payable + (price - saved),
          };
        },
        { full: 0, saved: 0, payable: 0 }
      ),
    [order]
  );

  return (
    <PreviewWrapper data-testid="minicart-preview">
      {order.map((item, index) => (
        <PreviewItemWrapper key={index} data-testid="preview-item">
          <span>{item.quantity}x</span>
          <span>{item.product.name}</span>
          <span>{formatPounds(applyPromotions(item))}</span>
        </PreviewItemWrapper>
      ))}
      <PreviewTotalWrapper>
        <PreviewTotalRow>
          <span>Total:</span>
          <span>{formatPounds(totals.full)}</span>
        </PreviewTotalRow>
        <PreviewTotalRow>
          <span>Total Promos:</span>
          <span>{formatPounds(totals.saved)}</span>
        </PreviewTotalRow>
        <PreviewTotalRow>
          <span>Total Payable:</span>
          <span>{formatPounds(totals.payable)}</span>
        </PreviewTotalRow>
      </PreviewTotalWrapper>
      <StyledSubmitOrder onClick={() => setShowAlert(true)}>Submit Order</StyledSubmitOrder>
      <SweetAlert2
        show={showAlert}
        title="Order Submitted"
        text="Hope you have a great experience!"
        confirmButtonColor="#ff8f00"
        confirmButtonText="See you soon!"
        onConfirm={() => {
          setOrder([]);
          fetch('/order/finish');
          clearOrder();
        }}
      />
    </PreviewWrapper>
  );
};

export default Preview;
