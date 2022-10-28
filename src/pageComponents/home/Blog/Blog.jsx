import { Content, Title, TitleContent, Wrapper } from './styles';
import Container from '../../../components/atoms/Container/Container';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import CardBlog from '../../../components/molecules/CardBlog/CardBlog';
import blog1 from '../../../assets/img/blog1.png';
import blog2 from '../../../assets/img/blog2.png';
import blog3 from '../../../assets/img/blog3.png';

const Blog = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>
            <Typography type={ typographyTypes.title_22 } Tag="span">LATEST FROM BLOG</Typography>
            <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18, 18, 18, 0.6)">SEE ALL</Typography>
          </Title>
          <TitleContent>
            <CardBlog image={ blog1 }
                      title="THE EASIEST WAY TO BREAK"
                      text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
                      date="April 6, 2032"
            />
            <CardBlog image={ blog2 }
                      title="WEDDING SEASON"
                      text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
                      date="April 6, 2032"
            />
            <CardBlog image={ blog3 }
                      title="RECENT FAVORITES ON REPEAT"
                      text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor"
                      date="April 6, 2032"
            />
          </TitleContent>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Blog;