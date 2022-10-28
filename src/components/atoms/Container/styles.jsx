import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 1140px;
  
  @media(max-width: 1200px) {
    width: 960px;
  }

  @media (max-width: 992px) {
    width: 690px;
  }

  @media (max-width: 720px) {
    width: 360px;
    padding: 0;
  }
  
`;