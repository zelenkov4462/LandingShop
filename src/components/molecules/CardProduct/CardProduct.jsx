import Typography from '../../atoms/Typography/Typography';
import { typographyTypes } from '../../atoms/Typography/constants';
import RatingStars from '../../atoms/RatingStars/RatingStars';
import ButtonDark from '../../atoms/ButtonDark/ButtonDark';

import {
  ButtonsWrapper,
  Color, ColorButton,
  Image,
  Info,
  Item,
  ItemWrapper,
  Size,
  SizeButton,
  Title,
  CardWrapper, ButtonContainer, PriceLineThrough, InfoWrapper, Sale,
} from './styles';
import grey from '../../../assets/img/grey.png';
import black from '../../../assets/img/black.png';
import blue from '../../../assets/img/blue.png';
import white from '../../../assets/img/white.png';
import heart from '../../../assets/svg/heart.svg';
import scale from '../../../assets/svg/scale.svg';

const CardProduct = ({ price, image, text, rating, sale, link, id }) => {
  return (
    <CardWrapper>
      <Image to={ `/${ link }/${ id }` } data-test-id={ `clothes-card-${ link.toLowerCase() }` }>
        <img src={ image } alt={ image }/>
        { sale
          ? <Sale>
            <Typography type={ typographyTypes.bodyBold } Tag="span" color="#ffffff">
              -{ sale }%
            </Typography>
          </Sale>
          : null
        }
      </Image>
      <ItemWrapper>
        <Item>
          <Title>
            { text }
          </Title>
          <Info>
            { sale
              ? <InfoWrapper>
                <Typography type={ typographyTypes.bodyBold } Tag="span">
                  $ { (price * sale / 100).toFixed(2) }
                </Typography>
                <PriceLineThrough>
                  <Typography type={ typographyTypes.small } Tag="span" color="rgba(18,18,18,0.4)">
                    $ { price.toFixed(2) }
                  </Typography>
                </PriceLineThrough>
              </InfoWrapper>
              : <Typography type={ typographyTypes.bodyBold } Tag="span">$ { price.toFixed(2) }</Typography>
            }
            <RatingStars rating={ rating }/>
          </Info>
          <Color>
            <ColorButton>
              <img src={ blue } alt="blue color"/>
            </ColorButton>
            <ColorButton>
              <img src={ white } alt="white color"/>
            </ColorButton>
            <ColorButton>
              <img src={ black } alt="black color"/>
            </ColorButton>
            <ColorButton>
              <img src={ grey } alt="grey color"/>
            </ColorButton>
          </Color>
          <Size>
            <SizeButton>
              <Typography type={ typographyTypes.small } Tag="span">XS</Typography>
            </SizeButton>
            <SizeButton>
              <Typography type={ typographyTypes.small } Tag="span">S</Typography>
            </SizeButton>
            <SizeButton>
              <Typography type={ typographyTypes.small } Tag="span">M</Typography>
            </SizeButton>
            <SizeButton>
              <Typography type={ typographyTypes.small } Tag="span">L</Typography>
            </SizeButton>
          </Size>
          <ButtonsWrapper>
            <ButtonDark width="145px" height="40px">
              <Typography type={ typographyTypes.button } Tag="span" color="#ffffff">
                ADD TO CART
              </Typography>
            </ButtonDark>
            <ButtonContainer>
              <img src={ heart } alt=""/>
            </ButtonContainer>
            <ButtonContainer>
              <img src={ scale } alt=""/>
            </ButtonContainer>
          </ButtonsWrapper>
        </Item>
      </ItemWrapper>
    </CardWrapper>
  );
};

export default CardProduct;