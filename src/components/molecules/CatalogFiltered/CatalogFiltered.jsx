import Container from '../../atoms/Container/Container';
import { CatalogItems, Loading, LoadingButton, Square } from './styles';
import CardProduct from '../CardProduct/CardProduct';
import Filter from './Filter/Filter';

const CatalogFiltered = ({ section, link }) => {
  return (
    <div data-test-id={`products-page-${link.toLowerCase()}`}>
      <Container>
        <Filter/>
        <CatalogItems>
          { section.map(item => {
            return (
              <CardProduct price={ item.price } image={ item.image } text={ item.text } rating={ item.rating }
                           sale={ item.sale } key={ item.id } id={ item.id } link={ link }/>
            );
          }) }
        </CatalogItems>
        <Loading>
          <LoadingButton>
            <Square/>
          </LoadingButton>
        </Loading>
      </Container>
    </div>
  );
};

export default CatalogFiltered;