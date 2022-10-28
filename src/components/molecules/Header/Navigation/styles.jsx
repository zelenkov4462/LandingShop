import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
`;

export const Menu = styled.nav`
  position: relative;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  text-decoration: none;

  @media (max-width: 1200px) {
    position: fixed;
    flex-direction: column;
    background-color: #ffffff;
    padding: 80px;
    z-index: 2;
    gap: 65px;
    top: 63px;
    left: -100%;
    transition: 500ms;
    border: 1px solid rgba(18, 18, 18, 0.1);

    &.activeList {
      left: 0;
    }
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  transition: 300ms;
  padding: 15px 7px;

  :hover {
    color: #9C9C9C;
  }
`;

export const Logo = styled(Link)`
  font-family: 'Playfair Display SC', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #121212;
  text-decoration: none;

  @media (max-width: 720px) {
    font-size: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const ButtonWithIcon = styled.button`
  transition: 500ms;
  background: none;
  border: none;
  position: relative;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Burger = styled.span`
  display: none;

  @media (max-width: 1200px) {
    display: block;
    position: relative;
    width: 25px;
    height: 1px;
    background-color: #121212;
    transition: 500ms;

    ::before {
      position: absolute;
      content: '';
      width: 25px;
      height: 1px;
      background-color: #121212;
      top: 6px;
      left: 0;
    }

    ::after {
      position: absolute;
      content: '';
      width: 25px;
      height: 1px;
      background-color: #121212;
      top: -6px;
      left: 0;
    }
  }

  &.active {
    display: block;
    position: relative;
    width: 25px;
    height: 1px;
    background-color: #121212;
    transition: 500ms;
    transform: rotate(45deg);
    top: 0;
    left: 0;

    ::before {
      position: absolute;
      content: '';
      width: 25px;
      height: 1px;
      background-color: #121212;
      transform: rotate(-90deg);
      top: 0;
      left: 0;
    }

    ::after {
      display: none;
    }
  }
`;

export const ButtonWithIconBurger = styled.button`
  width: 30px;
  height: 30px;
  display: none;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const ShoppingCart = styled.span`
  position: absolute;
  content: '';
  left: 10px;
  bottom: 18px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 9px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BurgerBackground = styled.div`

  @media (max-width: 1200px) {
    opacity: 0;
    transition: 500ms;

    &.backgroundActive {
      z-index: 1;
      position: fixed;
      top: -20px;
      left: 0;
      width: 100vw;
      height: 110vh;
      background-color: rgba(255, 255, 255, 0.9);
      opacity: 1;
    }
  }
`;