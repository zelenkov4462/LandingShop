import { CardWrapper, Image, Info,  Text } from './styles';
import Typography from '../../atoms/Typography/Typography';
import { typographyTypes } from '../../atoms/Typography/constants';

const CardBlog = ({ image, title, text, date }) => {
  return (
    <CardWrapper>
      <div>
        <Image>
          <img src={ image } alt={ image }/>
        </Image>
        <Text>
          <Typography type={ typographyTypes.title_14 } Tag="span">{ title }</Typography>
          <Typography type={ typographyTypes.body } Tag="span">{text}</Typography>
          <Info>
            <Typography type={typographyTypes.small} Tag='p' color='rgba(18, 18, 18, 0.6)'>{date}</Typography>
            <Typography type={typographyTypes.subtitle} Tag='p'>READ MORE</Typography>
          </Info>
        </Text>
      </div>
    </CardWrapper>
  );
};

export default CardBlog;