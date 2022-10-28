import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #F8F8F8;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  @media (max-width: 992px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`