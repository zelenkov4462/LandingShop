import CardProduct from '../../../components/molecules/CardProduct/CardProduct';
import Container from '../../../components/atoms/Container/Container';
import {
  CatalogButton,
  CatalogItems,
  CatalogTitle,
  CatalogTitleButton,
  CatalogTitleNav,
  CatalogWrapper,
} from './styles';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';

const Catalog = ({ section, title, link }) => {
  return (
    <CatalogWrapper data-test-id={`clothes-${link}`}>
      <Container>
        <CatalogTitle>
          <Typography type={ typographyTypes.title_22 } Tag="span">{ title }</Typography>
          <CatalogTitleNav>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span">NEW ARRIVALS</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">SPECIALS</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">BESTSELLER</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">MOST
                VIEWED</Typography>
            </CatalogTitleButton>
            <CatalogTitleButton>
              <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.6)">FEATURED
                PRODUCTS</Typography>
            </CatalogTitleButton>
          </CatalogTitleNav>
        </CatalogTitle>
        <CatalogItems>
          { section.map(item => {
            return (
              <CardProduct price={ item.price } image={ item.image } text={ item.text } rating={ item.rating }
                           sale={ item.sale } key={ item.id } id={item.id} link={link}/>
            );
          }) }
        </CatalogItems>
        <CatalogButton to={`/${link}`}>
          <Typography type={ typographyTypes.button } Tag="span">
            SEE ALL
          </Typography>
        </CatalogButton>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;