import { Description, Title, TitleWrapper, Wrapper } from './styles';
import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';

const Additional = () => {
  return (
    <Wrapper>
      <Typography type={typographyTypes.subtitle} Tag='span'>
        ADDITIONAL INFORMATION
      </Typography>
      <TitleWrapper>
        <Title>
          Color:
          <Description>
            Blue, White, Black, Grey
          </Description>
        </Title>
        <Title>
          Size:
          <Description>
            XS, S, M, L
          </Description>
        </Title>
        <Title>
          Material:
          <Description>
            100% Polyester
          </Description>
        </Title>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Additional;