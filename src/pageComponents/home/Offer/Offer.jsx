import { OfferContainer, OfferText, OfferSection, OfferWrapper } from './styles';
import newSeason from '../../../assets/img/newseason.png';
import sale from '../../../assets/img/sale.png';
import Container from '../../../components/atoms/Container/Container';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';

const Offer = () => {
  return (
    <OfferSection>
      <Container>
        <OfferWrapper>
          <OfferContainer image={ newSeason }>
            <OfferText>
              <Typography type={typographyTypes.subtitle} Tag='span' color='rgba(18, 18, 18, 0.6)'>NEW SEASON</Typography>
              <Typography type={typographyTypes.title_16} Tag='span'>LOOKBOOK COLLECTION</Typography>
            </OfferText>
          </OfferContainer>
          <OfferContainer image={ sale }>
            <OfferText>
              <Typography type={typographyTypes.subtitle} Tag='span' color='rgba(18, 18, 18, 0.6)'>SALE</Typography>
              <Typography type={typographyTypes.title_16} Tag='span'>
                GET UP TO
                <Typography type={typographyTypes.title_16} Tag='span' color='#E91E63'> 50% OFF</Typography>
              </Typography>
            </OfferText>
          </OfferContainer>
        </OfferWrapper>
      </Container>
    </OfferSection>
  );
};

export default Offer;