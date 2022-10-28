import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 720px) {
    display: none;
  }
`;

export const DeliveryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const Delivery = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 23px;
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: nowrap;
`