import { Content, Img, Wrapper } from './styles';
import Typography from '../../../atoms/Typography/Typography';
import { typographyTypes } from '../../../atoms/Typography/constants';
import Container from '../../../atoms/Container/Container';
import payment from '../../../../assets/img/payment.png';

const Copyright = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.8)">
            Copyright © 2032 all rights reserved
          </Typography>
          <Img src={ payment } alt="payment"/>
          <a href="https://clevertec.ru/study/frontend.html">
            <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.8)">
              Clevertec.ru/training
            </Typography>
          </a>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Copyright;