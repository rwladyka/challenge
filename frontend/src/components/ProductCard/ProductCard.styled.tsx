import { styled } from 'styled-components';

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 4px;
  width: 200px;
  box-shadow: 0 25px 50px -12px #d1d5db;

  &:hover {
    cursor: default;
    shadow-color: #9ca3af;
    box-shadow: 0 25px 50px -12px #9ca3af;
  }
`;

export const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const StyledBuyButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 32px;
  background: #ff8f00;
  color: white;
  font-weight: 600;
  padding: 4px 8px;

  &:hover {
    background: #f47900;
  }
`;
