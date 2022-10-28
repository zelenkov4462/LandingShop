import { Content, Email, SubscribeEmail, Text, Wrapper } from './styles';
import Container from '../../../atoms/Container/Container';
import Typography from '../../../atoms/Typography/Typography';
import { typographyTypes } from '../../../atoms/Typography/constants';
import Social from '../../../atoms/Social/Social';
import ButtonDark from '../../../atoms/ButtonDark/ButtonDark';

const Join = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>
            <Typography type={ typographyTypes.subtitle } Tag="span" color="#ffffff">
              BE IN TOUCH WITH US:
            </Typography>
          </Text>
          <Email>
            <SubscribeEmail/>
            <ButtonDark width='108px' height='32px'>
                JOIN US
            </ButtonDark>
          </Email>
          <Social/>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Join;