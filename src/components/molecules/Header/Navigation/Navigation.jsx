import Container from '../../../atoms/Container/Container';
import {
  ButtonWithIcon,
  Wrapper,
  ButtonGroup,
  Logo,
  NavigationLink,
  NavigationItem,
  NavigationList,
  ShoppingCart, Burger, ButtonWithIconBurger, BurgerBackground, Menu,
} from './styles';
import search from '../../../../assets/svg/search.svg';
import globe from '../../../../assets/svg/globe.svg';
import user from '../../../../assets/svg/user.svg';
import shopping from '../../../../assets/svg/shopping-bag.svg';
import { useState } from 'react';

const Navigation = () => {
  const links = ['About Us', 'Women', 'Men', 'Beauty', 'Accessories', 'Blog', 'Contact'];

  const [burgerEnabled, setBurgerEnabled] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo to="/" data-test-id="header-logo-link">
          CleverShop
        </Logo>
        <BurgerBackground
          className={ burgerEnabled ? 'backgroundActive' : '' }
          onClick={ () => {
            setBurgerEnabled(!burgerEnabled);
            burgerEnabled
              ? document.body.style.overflow = 'visible'
              : document.body.style.overflow = 'hidden';
          } }
        />
        <Menu data-test-id="menu">
          <NavigationList className={ burgerEnabled ? 'activeList' : '' }>
            { links.map((item, index) => (
              <NavigationItem key={ index }>
                <NavigationLink
                  to={ `/${ item.toLowerCase() }` }
                  data-test-id={ `menu-link-${ item.toLowerCase() }` }
                >
                  { item }
                </NavigationLink>
              </NavigationItem>
            )) }
          </NavigationList>
        </Menu>
        <ButtonGroup>
          <ButtonWithIcon>
            <img src={ search } alt="search icon"/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ globe } alt="globe icon"/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ user } alt="user icon"/>
          </ButtonWithIcon>
          <ButtonWithIcon>
            <img src={ shopping } alt="shopping icon"/>
            <ShoppingCart>2</ShoppingCart>
          </ButtonWithIcon>
          <ButtonWithIconBurger onClick={ () => {
            setBurgerEnabled(!burgerEnabled);
            burgerEnabled
              ? document.body.style.overflow = 'visible'
              : document.body.style.overflow = 'hidden';
          }
          }>
            <Burger className={ burgerEnabled ? 'active' : '' }/>
          </ButtonWithIconBurger>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Navigation;