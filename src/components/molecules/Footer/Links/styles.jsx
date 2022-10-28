import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 20px;
  }
`;