import styled from 'styled-components';

export const Wrapper = styled.button`
  width: ${ props => props.width };
  height: ${ props => props.height };
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  background-color: #121212;
  transition: 500ms;
  border: 1px solid #ffffff;

  :hover {
    background-color: #E6E6E6;
    color: #121212;
  }

  :active {
    background-color: #9C9C9C;
    color: #ffffff;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  line-height: 14.56px;
`