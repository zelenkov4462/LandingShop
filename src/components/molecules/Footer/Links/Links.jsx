import Container from '../../../atoms/Container/Container';
import { Wrapper } from './styles';
import LinksGroup from './LinksGroup/LinksGroup';
import Contacts from './Contacts/Contacts';

const Links = () => {
  const links = {
    'CATEGORIES': ['Men', 'Women', 'Accessories', 'Beauty'],
    'INFORMATION': ['About US', 'Contact US', 'Blog', 'FAQs'],
    'USEFUL LINKS': ['Terms & Conditions', 'Returns & Exchanges', 'Shipping & Delivery', 'Privacy Policy'],
  }

  return (
    <Container>
      <Wrapper>
        {Object.keys(links).map((item, index) => {
          return (
            <LinksGroup title={item} link={links[item]} key={index} />
          )
        })}
        <Contacts/>
      </Wrapper>
    </Container>
  );
};

export default Links;