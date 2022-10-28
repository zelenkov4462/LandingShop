import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`

export const Item = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;