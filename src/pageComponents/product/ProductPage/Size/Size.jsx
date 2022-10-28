import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import { Clothes, SizeButton, SizeButtonWrapper, Wrapper } from './styles';
import clothes from '../../../../assets/svg/clothes.svg';

const Size = () => {
  return (
    <Wrapper>
      <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18, 18, 18, 0.6)">
        SIZE:
        <Typography type={ typographyTypes.subtitle } Tag="span">
          S
        </Typography>
      </Typography>
      <SizeButtonWrapper>
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
      </SizeButtonWrapper>
      <Clothes>
        <img src={clothes} alt="clothes"/>
        <Typography type={typographyTypes.small} Tag='span' color='rgba(18, 18, 18, 0.6)'>Size guide</Typography>
      </Clothes>
    </Wrapper>
  );
};

export default Size;