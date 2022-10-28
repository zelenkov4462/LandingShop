import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import blue from '../../../../assets/img/blue64.png';
import white from '../../../../assets/img/white64.png';
import black from '../../../../assets/img/black64.png';
import grey from '../../../../assets/img/grey64.png';
import { ColorButton, ColorPreview, Wrapper } from './styles';

const Color = () => {
  const color = [blue, white, black, grey];

  return (
    <Wrapper>
      <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18, 18, 18, 0.6)">
        COLOR:
        <Typography type={ typographyTypes.subtitle } Tag="span">
          Blue
        </Typography>
      </Typography>
      <ColorPreview>
        { color.map((item, index) => {
          return (
            <ColorButton key={index}>
              <img src={ item } alt={ item }/>
            </ColorButton>
          );
        }) }
      </ColorPreview>
    </Wrapper>
  );
};

export default Color;