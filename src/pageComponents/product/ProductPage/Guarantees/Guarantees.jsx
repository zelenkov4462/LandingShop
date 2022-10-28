import { Delivery, DeliveryWrapper, Title, TitleWrapper, Wrapper } from './styles';
import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import truck from '../../../../assets/svg/truck.svg';
import refresh from '../../../../assets/svg/refresh.svg';
import mail from '../../../../assets/svg/mail.svg';
import Divider from '../../../../components/atoms/Divider/Divider';
import safe from '../../../../assets/img/safe.png';

const Guarantees = () => {
  return (
    <Wrapper>
      <DeliveryWrapper>
        <Delivery>
          <img src={ truck } alt=""/>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
            Shipping & Delivery
          </Typography>
        </Delivery>
        <Delivery>
          <img src={ refresh } alt=""/>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
            Returns & Exchanges
          </Typography>
        </Delivery>
        <Delivery>
          <img src={ mail } alt=""/>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
            Ask a question
          </Typography>
        </Delivery>
      </DeliveryWrapper>
      <TitleWrapper>
        <Title>
          <Typography type={ typographyTypes.subtitle } Tag="span">
            GUARANTEED&#160;SAFE&#160;CHECKOUT
          </Typography>
        </Title>
        <Divider/>
      </TitleWrapper>
      <img src={ safe } alt=""/>
    </Wrapper>
  );
};

export default Guarantees;