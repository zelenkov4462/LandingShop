import {
  Arrow, ArrowInactive, Content,
  ContentPath, Image, InfoWrapper, InfoRating,
  PagesPath, Share,
  StyledLink,
  StyledLinkHome, StyledLinkInactive, Title, TitleProduct, TitleProductWrapper,
  Wrapper, Info
} from './styles';
import Container from '../Container/Container';
import share from '../../../assets/svg/share.svg';
import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';
import RatingStars from '../RatingStars/RatingStars';

const Path = ({ link, title }) => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <ContentPath>
            <PagesPath>
              <StyledLinkHome to="/">Home</StyledLinkHome>
              { title
                ?
                <>
                  <ArrowInactive/>
                  <StyledLinkInactive to={ `/${ link.toLowerCase() }` }>{ link }</StyledLinkInactive>
                  <Arrow/>
                  <StyledLink to={ `/${ link.toLowerCase() }/${ title }` }>{ title }</StyledLink>
                </>
                :
                <>
                  <Arrow/>
                  <StyledLink to={ `/${ link.toLowerCase() }` }>{ link }</StyledLink>
                </>
              }
            </PagesPath>
            <Share>
              <Image src={ share } alt="share"/>
              <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">Share</Typography>
            </Share>
          </ContentPath>
          { title
            ?
            <TitleProduct>
              <TitleProductWrapper>
                <Typography type={ typographyTypes.title_26 } Tag="h2">
                  { title }
                </Typography>
              </TitleProductWrapper>
              <InfoWrapper>
                <InfoRating>
                  <RatingStars rating="4"/>
                  <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
                    2 Reviews
                  </Typography>
                </InfoRating>
                <Info>
                  <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
                    SKU: <Typography type={typographyTypes.bodyBold} Tag="span">777</Typography>
                  </Typography>
                  <Typography type={ typographyTypes.small } Tag="span" color="rgba(18, 18, 18, 0.6)">
                    Availability: <Typography type={typographyTypes.bodyBold} Tag="span">In Stock</Typography>
                  </Typography>
                </Info>
              </InfoWrapper>
            </TitleProduct>
            :
            <Title>
              <Typography type={ typographyTypes.title_26 } Tag="h2">
                { link.toUpperCase() }
              </Typography>
            </Title>
          }
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Path;