import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

import { PreviewLink, Wrapper } from './styles';

const PreviewCard = ({ children, img }) => {
  return (
    <Wrapper img={ img }>
      <PreviewLink to={`/${children}`}>
        <Typography type={ typographyTypes.title_16 } Tag="h2">
          { children }
        </Typography>
      </PreviewLink>
    </Wrapper>
  );
};

export default PreviewCard;