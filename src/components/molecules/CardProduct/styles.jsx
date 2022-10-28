import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled.div`
  width: 255px;
  height: 212px;
  position: absolute;
  top: 318px;
  background-color: #ffffff;
  transition: 500ms;
  transform: translateY(0px);
`;

export const CardWrapper = styled.article`
  display: flex;
  position: relative;
  height: 378px;
  width: 255px;
  overflow: hidden;

  :hover ${ ItemWrapper } {
    transform: translateY(-155px);
  }
`;

export const Image = styled(Link)`
  background-size: cover;
  width: 255px;
  height: 318px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 15.68px;
  color: rgba(18, 18, 18, 0.6);
  padding: 16px 0 11px 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(18, 18, 18, 0.4);
`;

export const Color = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 16px 0 12px 0;
`;

export const ColorButton = styled.button`
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const Size = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding-bottom: 20px;
`;

export const SizeButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const ButtonContainer = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  cursor: pointer;
`;

export const PriceLineThrough = styled.p`
  text-decoration: line-through;
`;

export const Sale = styled.div`
  position: absolute;
  top: 0;
  width: 53px;
  height: 31px;
  background-color: #E91E63;
  display: flex;
  align-items: center;
  justify-content: center;
`
