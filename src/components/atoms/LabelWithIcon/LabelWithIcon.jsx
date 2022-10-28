import Typography from '../Typography/Typography';
import { typographyTypes } from '../Typography/constants';

import { Wrapper, Image } from './styles';

const LabelWithIcon = ({ img, text }) => {
  return (
    <Wrapper>
      <Image src={ img }/>
      <Typography type={ typographyTypes.small } Tag="p" color="rgba(255, 255, 255, 0.8)">{ text }</Typography>
    </Wrapper>
  );
};

export default LabelWithIcon;