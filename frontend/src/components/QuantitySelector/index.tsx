import { QuantityButton, QuantitySelectorWapper } from './QuantitySelector.styled';

type QuantitySelectorProps = {
  quantity: number;
  onChange: (value: number) => void;
};

const QuantitySelector = ({ quantity, onChange }: QuantitySelectorProps) => {
  const handleChange = (value: number) => {
    const newValue = quantity + value;
    if (newValue < 1) return;

    onChange(newValue);
  };

  return (
    <QuantitySelectorWapper>
      <QuantityButton onClick={() => handleChange(-1)} data-testid="qty-selector-minus">
        -
      </QuantityButton>
      <span>{quantity}</span>
      <QuantityButton onClick={() => handleChange(1)} data-testid="qty-selector-plus">
        +
      </QuantityButton>
    </QuantitySelectorWapper>
  );
};

export default QuantitySelector;
