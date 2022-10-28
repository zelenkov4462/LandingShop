import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 96px 0;
  gap: 48px;

  @media (max-width: 992px) {
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

