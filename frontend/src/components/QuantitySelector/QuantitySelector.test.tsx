import { render, screen, fireEvent } from '@testing-library/react';
import QuantitySelector from './index';

describe('QuantitySelector', () => {
  it('renders the initial quantity and buttons', () => {
    render(<QuantitySelector quantity={3} onChange={() => {}} />);

    const quantityElement = screen.getByText('3');
    expect(quantityElement).toBeInTheDocument();

    const plusButton = screen.getByTestId('qty-selector-plus');
    const minusButton = screen.getByTestId('qty-selector-minus');
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
  });

  it('calls onChange when clicking buttons', () => {
    const onChangeMock = jest.fn();
    render(<QuantitySelector quantity={3} onChange={onChangeMock} />);

    const plusButton = screen.getByTestId('qty-selector-plus');
    fireEvent.click(plusButton);

    expect(onChangeMock).toHaveBeenCalledWith(4);

    const minusButton = screen.getByTestId('qty-selector-minus');
    fireEvent.click(minusButton);

    expect(onChangeMock).toHaveBeenCalledWith(2);
  });

  it('does not call onChange when quantity becomes less than 1', () => {
    const onChangeMock = jest.fn();

    render(<QuantitySelector quantity={1} onChange={onChangeMock} />);

    const minusButton = screen.getByTestId('qty-selector-minus');
    fireEvent.click(minusButton);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
