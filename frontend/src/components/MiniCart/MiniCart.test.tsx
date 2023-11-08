import { render, screen, fireEvent } from '@testing-library/react';
import MiniCart from './index';
import OrderContextProvider, { OrderContext } from '../OrderContextProvider';
import { mockOrder } from '../../mocks/mocks';

describe('MiniCart', () => {
  it('opens the mini cart when clicking on StyledMiniCart', () => {
    render(
      <OrderContext.Provider value={{ order: mockOrder, setOrder: () => {} }}>
        <MiniCart />
      </OrderContext.Provider>
    );

    fireEvent.click(screen.getByTestId('minicart'));
    expect(screen.queryByTestId('minicart-preview')).toBeInTheDocument();
  });

  it('closes the mini cart when clicking outside StyledMiniCart', () => {
    render(
      <>
        <div data-testid="outside-element">Outside Element</div>
        <OrderContext.Provider value={{ order: mockOrder, setOrder: () => {} }}>
          <MiniCart />
        </OrderContext.Provider>
      </>
    );

    expect(screen.queryByTestId('minicart-preview')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('minicart'));
    expect(screen.queryByTestId('minicart-preview')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('outside-element'));
    expect(screen.queryByTestId('minicart-preview')).not.toBeInTheDocument();
  });

  it('renders Preview component when isOpen is true and qtyItems > 0', () => {
    render(
      <OrderContext.Provider value={{ order: mockOrder, setOrder: () => {} }}>
        <MiniCart />
      </OrderContext.Provider>
    );

    fireEvent.click(screen.getByTestId('minicart'));
    expect(screen.queryByTestId('minicart-preview')).toBeInTheDocument();
    expect(screen.getByText('Amazing Burger!')).toBeInTheDocument();
  });

  it('does not render Preview component when isOpen is true but qtyItems is 0', () => {
    render(
      <OrderContextProvider>
        <MiniCart />
      </OrderContextProvider>
    );

    fireEvent.click(screen.getByTestId('minicart'));
    expect(screen.queryByTestId('minicart-preview')).not.toBeInTheDocument();
  });
});
