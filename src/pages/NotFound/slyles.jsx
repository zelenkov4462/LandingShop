import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  gap: 200px;
`;

export const Logo = styled(Link)`
  font-family: 'Playfair Display SC', serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 32px;
  color: #121212;
  text-decoration: none;
`;
