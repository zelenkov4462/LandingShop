import { PreviewImage, PreviewItemWrapper, Content, Text } from './styles';

import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';

const PreviewItem = ({ image, title, text }) => {
  return (
    <PreviewItemWrapper>
      <PreviewImage src={ image } alt="shipping icon"/>
      <Content>
        <Typography type={ typographyTypes.subtitle } Tag="span">
          { title }
        </Typography>
        <Text>
          <Typography type={ typographyTypes.body } Tag="span" color="#9C9C9C">
            { text }
          </Typography>
        </Text>
      </Content>
    </PreviewItemWrapper>
  );
};

export default PreviewItem;