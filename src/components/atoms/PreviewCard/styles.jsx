import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.article.attrs(props => props.img)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url(${ props => props.img });
`;

const toMaxWidth = keyframes`
  0% {
    width: 50%;
    max-width: max-content;
  }
  1% {
    max-width: none;
  }
  100% {
    width: 100%;
  }
`;

const toMinWidth = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 50%;
  }
`;

export const PreviewLink = styled(Link)`
  background: #ffffff;
  padding: 13px 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  animation: ${ toMinWidth } 0.3s linear 1 forwards;
  text-decoration: none;

  &:hover {
    border-radius: 0;
    animation: ${ toMaxWidth } 0.3s linear 1 forwards;
  }

  :active {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;