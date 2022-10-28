import styled from 'styled-components';

export const OfferSection = styled.section`
  display: flex;
  gap: 30px;
  padding: 96px 0;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const OfferWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media(max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ props => props.image });
  background-size: cover;
  height: 260px;
  width: 540px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const OfferText = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;