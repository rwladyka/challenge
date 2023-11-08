import { styled } from 'styled-components';

export const StyledMiniCart = styled.div`
  cursor: pointer;
  position: relative;
`;

export const StyledIcon = styled.div`
  & svg {
    width: 36px;
    height: 36px;
  }
`;

export const StyledCountBadge = styled.div`
  display: flex;
  justify-content: center;
  min-width: 12px;
  height: 12px;
  color: white;
  font-weight: 600;
  background: #ff8f00;
  border-radius: 50%;
  padding: 4px;
  position: absolute;
  top: 0;
  right: -8px;
  font-size: 12px;
`;

export const PreviewWrapper = styled.div`
  position: absolute;
  background: white;
  padding: 8px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 25px 50px -12px #d1d5db;
  right: 0;
`;

export const PreviewItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4px;
  margin-bottom: 6px;
`;

export const PreviewTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 8px 0;
  padding: 6px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const PreviewTotalRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2px 0;
`;

export const StyledSubmitOrder = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: #ff8f00;
  color: white;
  font-weight: 600;
  padding: 4px 8px;

  &:hover {
    background: #f47900;
  }
`;
