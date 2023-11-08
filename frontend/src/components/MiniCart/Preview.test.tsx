import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Preview from './Preview';
import { OrderContext } from '../OrderContextProvider';
import {
  mockOrder,
  mockProductWithFlatPercent,
  mockProductWithGetFree,
  mockProductWithPriceOverride,
} from '../../mocks/mocks';
import { Order } from '../../types';

// Helper function to wrap the component with the OrderContext
const renderWithOrderContext = (children: ReactNode, order?: Order[]) => {
  const mockSetOrder = jest.fn();
  return render(
    <OrderContext.Provider value={{ order: order || mockOrder, setOrder: mockSetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

describe('Preview component', () => {
  it('renders the correct number of preview items', () => {
    renderWithOrderContext(<Preview />);
    expect(screen.getAllByTestId('preview-item')).toHaveLength(mockOrder.length);
  });

  it('renders the correct item details', () => {
    renderWithOrderContext(<Preview />);

    const previewItems = screen.getAllByTestId('preview-item');
    const quantityElement = screen.getByText('1x');
    const nameElement = screen.getByText('Amazing Burger!');
    const priceElement = screen.getAllByText('£9.99');

    expect(previewItems[0]).toContainElement(quantityElement);
    expect(previewItems[0]).toContainElement(nameElement);
    expect(previewItems[0]).toContainElement(priceElement[0]);
  });

  it('renders the correct total values', () => {
    renderWithOrderContext(<Preview />, [
      {
        quantity: 3,
        product: mockProductWithFlatPercent,
      },
      {
        quantity: 3,
        product: mockProductWithGetFree,
      },
      {
        quantity: 3,
        product: mockProductWithPriceOverride,
      },
    ]);

    expect(screen.getByText('Total:')).toBeInTheDocument();
    expect(screen.getByText('£77.91')).toBeInTheDocument();

    expect(screen.getByText('Total Promos:')).toBeInTheDocument();
    expect(screen.getByText('£15.45')).toBeInTheDocument();

    expect(screen.getByText('Total Payable:')).toBeInTheDocument();
    expect(screen.getByText('£62.46')).toBeInTheDocument();
  });
});
