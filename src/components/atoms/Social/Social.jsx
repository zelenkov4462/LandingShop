import { SocialLink, SocialWrapper } from './styles';
import facebook from '../../../assets/svg/facebook.svg';
import twitter from '../../../assets/svg/twitter.svg';
import instagram from '../../../assets/svg/instagram.svg';
import pinterest from '../../../assets/svg/pinterest.svg';

const Social = () => {
  return (
    <SocialWrapper>
      <SocialLink href="https://ru-ru.facebook.com/" target="_blank">
        <img src={ facebook } alt="facebook" width="13" height="13"/>
      </SocialLink>
      <SocialLink href="https://twitter.com/" target="_blank">
        <img src={ twitter } alt="twitter" width="13" height="13"/>
      </SocialLink>
      <SocialLink href="https://www.instagram.com/" target="_blank">
        <img src={ instagram } alt="instagram" width="13" height="13"/>
      </SocialLink>
      <SocialLink href="https://www.pinterest.com/" target="_blank">
        <img src={ pinterest } alt="pinterest" width="13" height="13"/>
      </SocialLink>
    </SocialWrapper>
  );
};

export default Social;