import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
  }
`;