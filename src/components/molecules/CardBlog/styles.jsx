import styled from 'styled-components';

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  width: 302px;
  height: 174px;
  background-color: #ffffff;
  left: 24px;
  position: absolute;
  transition: 300ms;
  transform: translateY(-56px);
  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  width: 100%;
  transform: translateY(100px);
  transition: 300ms;
`

export const CardWrapper = styled.article`
  display: flex;
  position: relative;
  height: 394px;

  :hover ${ Text } {
    height: 159px;
    transform: translateY(-93px);
  }
  
  :hover ${Info} {
    visibility: visible;
    transform: translateY(12px);
  }
`;

export const Image = styled.div`
  width: 350px;
  height: 276px;
  background-size: cover;
`;
