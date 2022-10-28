import { RatingStarsWrapper, StarsImage } from './styles';
import yellowStar from '../../../assets/svg/YellowStar.svg';
import greyStar from '../../../assets/svg/greyStar.svg';

const RatingStars = ({ rating }) => {
  return (
    <RatingStarsWrapper>
      { rating >= 1 ? <StarsImage src={ yellowStar } alt="yellowStar"/> : <StarsImage src={ greyStar } alt="greyStar"/> }
      { rating >= 2 ? <StarsImage src={ yellowStar } alt="yellowStar"/> : <StarsImage src={ greyStar } alt="greyStar"/> }
      { rating >= 3 ? <StarsImage src={ yellowStar } alt="yellowStar"/> : <StarsImage src={ greyStar } alt="greyStar"/> }
      { rating >= 4 ? <StarsImage src={ yellowStar } alt="yellowStar"/> : <StarsImage src={ greyStar } alt="greyStar"/> }
      { rating >= 5 ? <StarsImage src={ yellowStar } alt="yellowStar"/> : <StarsImage src={ greyStar } alt="greyStar"/> }
    </RatingStarsWrapper>
  );
};

export default RatingStars;