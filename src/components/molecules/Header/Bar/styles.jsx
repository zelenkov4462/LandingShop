import styled from 'styled-components';

export const WrapperBackground = styled.div`
  background: #000000;
  width: 100%;
  color: #ffffff;
  margin: 0;

  @media (max-width: 720px) {
    display: none;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`


