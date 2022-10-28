import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import ButtonDark from '../../../../components/atoms/ButtonDark/ButtonDark';
import heart from '../../../../assets/svg/heart.svg';
import scale from '../../../../assets/svg/scale.svg';
import { ButtonContainer, ButtonsWrapper, PriceText, Wrapper } from './styles';

const Price = () => {
  return (
    <Wrapper>
      <PriceText>
        <Typography type={typographyTypes.title_26} Tag='span'>
          $ 379.99
        </Typography>
      </PriceText>
      <ButtonsWrapper>
        <ButtonDark width='154px' height='48px'>
          <Typography type={typographyTypes.button} Tag='span' color='#ffffff'>
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
    </Wrapper>
  );
};

export default Price;