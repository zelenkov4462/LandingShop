import { Item, NavLink, List, Title, Wrapper } from './styles';
import Typography from '../../../../atoms/Typography/Typography';
import { typographyTypes } from '../../../../atoms/Typography/constants';

const LinksGroup = ({ title, link }) => {
  return (
    <Wrapper>
      <Title>
        <Typography type={ typographyTypes.subtitle } Tag="span">{ title }</Typography>
      </Title>
      <List>
        { link?.map((item, index) => {
          return (
            <Item key={ index }>
              <NavLink to={ `/${ item.toLowerCase() }` } data-test-id={ `footer-nav-link-${ item.toLowerCase() }` }>
                <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.7)">
                  { item }
                </Typography>
              </NavLink>
            </Item>
          );
        }) }
      </List>
    </Wrapper>
  );
};

export default LinksGroup;