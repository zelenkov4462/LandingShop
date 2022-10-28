import {
  ImageContainerLeft, ImageContainerRight,
  SubscribeContainer,
  SubscribeContent,
  SubscribeEmail,
  SubscribeTitle,
  SubscribeWrapper,
} from './styles';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import ButtonDark from '../../../components/atoms/ButtonDark/ButtonDark';

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <ImageContainerLeft/>
      <SubscribeContainer>
        <SubscribeContent>
          <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18, 18, 18, 0.6)">
            SPECIAL OFFER
          </Typography>
          <SubscribeTitle>
            <Typography type={ typographyTypes.title_26 } Tag="span">
              SUBSCRIBE
            </Typography>
            <Typography type={ typographyTypes.title_26 } Tag="span">
              AND
              <Typography type={ typographyTypes.title_26 } Tag="span" color="#E91E63"> GET 10% OFF</Typography>
            </Typography>
            <SubscribeEmail/>
            <ButtonDark width='342px' height='66px'>
              SUBSCRIBE
            </ButtonDark>
          </SubscribeTitle>
        </SubscribeContent>
      </SubscribeContainer>
      <ImageContainerRight/>
    </SubscribeWrapper>
  );
};

export default Subscribe;