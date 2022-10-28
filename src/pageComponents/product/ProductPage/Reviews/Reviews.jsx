import { Rating, RatingWrapper, ReviewButton, ReviewTitle, Comments, Wrapper, ReviewWrapper } from './styles';
import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import RatingStars from '../../../../components/atoms/RatingStars/RatingStars';

const Reviews = () => {
  return (
    <Wrapper>
      <Typography type={ typographyTypes.subtitle } Tag="span">
        REVIEWS
      </Typography>
      <RatingWrapper>
        <Rating>
          <RatingStars rating="4"/>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18,18,18,0.6)">
            2 Reviews
          </Typography>
        </Rating>
        <ReviewButton>
          <Typography type={ typographyTypes.small } Tag="span" color="rgba(18,18,18,0.6)">
            Write a review
          </Typography>
        </ReviewButton>
      </RatingWrapper>
      <ReviewWrapper>
        <Comments>
          <ReviewTitle>
            <Typography type={ typographyTypes.subtitle } Tag="span">
              Oleg Chabanov
            </Typography>
            <RatingStars rating="4"/>
          </ReviewTitle>
          <Typography type={ typographyTypes.body } Tag="span" color="rgba(18,18,18,0.8)">
            On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by
            the charms of pleasure of the moment
          </Typography>
        </Comments>
        <Comments>
          <ReviewTitle>
            <Typography type={ typographyTypes.subtitle } Tag="span">
              ShAmAn design
            </Typography>
            <RatingStars rating="4"/>
          </ReviewTitle>
          <Typography type={ typographyTypes.body } Tag="span" color="rgba(18,18,18,0.8)">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          </Typography>
        </Comments>
      </ReviewWrapper>
    </Wrapper>
  );
};

export default Reviews;