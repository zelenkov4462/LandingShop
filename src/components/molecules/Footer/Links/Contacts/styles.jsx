import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #121212;
`;

export const Image = styled.img`
  width: 14px;
  height: 14px;
`;
