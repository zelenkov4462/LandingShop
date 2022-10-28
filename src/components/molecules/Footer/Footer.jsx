import { Wrapper } from './styles';
import Join from './Join/Join';
import Links from './Links/Links';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <Wrapper data-test-id='footer'>
      <Join/>
      <Links/>
      <Copyright/>
    </Wrapper>
  );
};

export default Footer;