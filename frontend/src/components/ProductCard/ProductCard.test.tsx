import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductCard from './index';
import { mockProduct } from '../../mocks/mocks';
import { OrderContext } from '../OrderContextProvider';
import { server } from '../../mocks/server';

import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

describe('ProductCard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Amazing Burger!')).toBeInTheDocument();
    expect(screen.getByText('£9.99')).toBeInTheDocument();
  });

  it('increments the quantity when clicking on the QuantitySelector', () => {
    render(<ProductCard product={mockProduct} />);

    const incrementButton = screen.getByTestId('qty-selector-plus');
    fireEvent.click(incrementButton);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decrements the quantity when clicking on the QuantitySelector', () => {
    render(<ProductCard product={mockProduct} />);

    fireEvent.click(screen.getByTestId('qty-selector-plus'));
    fireEvent.click(screen.getByTestId('qty-selector-minus'));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('triggers handleBuy function when clicking on the "Add to Cart" button', async () => {
    const setOrderMock = jest.fn();

    render(
      <OrderContext.Provider value={{ order: [], setOrder: setOrderMock }}>
        <ProductCard product={mockProduct} />
      </OrderContext.Provider>
    );
    fetchMock.mockResponseOnce(JSON.stringify(mockProduct));
    fireEvent.click(screen.getByTestId('btn-add-to-cart'));

    await waitFor(() => {
      expect(setOrderMock).toHaveBeenCalledTimes(1);
    });
  });

  it('updates the order state when clicking on the "Add to Cart" button', async () => {
    const setOrderMock = jest.fn();

    render(
      <OrderContext.Provider value={{ order: [], setOrder: setOrderMock }}>
        <ProductCard product={mockProduct} />
      </OrderContext.Provider>
    );
    fetchMock.mockResponseOnce(JSON.stringify(mockProduct));
    fireEvent.click(screen.getByTestId('btn-add-to-cart'));

    await waitFor(() => {
      expect(setOrderMock).toHaveBeenCalledWith([
        {
          quantity: 1,
          product: mockProduct,
        },
      ]);
    });
  });
});
