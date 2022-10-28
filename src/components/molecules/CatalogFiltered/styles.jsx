import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CatalogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px 0;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

export const Square = styled.span`
  width: 20px;
  height: 20px;
  background-color: #000000;
  transform: rotate(45deg);
`;

export const LoadingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 230px;
  height: 50px;
  cursor: pointer;
  border: none;
`;
