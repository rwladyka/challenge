import { styled } from 'styled-components';

export const QuantitySelectorWapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const QuantityButton = styled.button`
  cursor: pointer;
  background: tranparent;
  border: none;
  border-radius: 50%;
  padding: 4px 8px;
  background: #ffd814;
  font-weight: 600;

  &:hover {
    background: #f7ca00;
  }
`;
