import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F8F8F8;
  height: 102px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentPath = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;

  @media(max-width: 720px) {
    display: none;
`;

export const Title = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleProduct = styled(Title)`
  padding: 6px 0;
  flex-direction: column;
`;

export const TitleProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PagesPath = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #121212;
`;

export const StyledLinkHome = styled(Link)`
  text-decoration: none;
  color: rgba(18, 18, 18, 0.6);
`;

export const StyledLinkInactive = styled(Link)`
  text-decoration: none;
  color: rgba(18, 18, 18, 0.6);
  position: relative;
`;

export const Arrow = styled.span`
  width: 0;
  height: 0;
  border-top: 3px solid transparent;
  border-left: 10px solid #121212;
  border-bottom: 3px solid transparent;
`;

export const ArrowInactive = styled.span`
  width: 0;
  height: 0;
  border-top: 3px solid transparent;
  border-left: 10px solid rgba(18, 18, 18, 0.6);
  border-bottom: 3px solid transparent;
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Image = styled.img`
  height: 14px;
  width: 14px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InfoRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
