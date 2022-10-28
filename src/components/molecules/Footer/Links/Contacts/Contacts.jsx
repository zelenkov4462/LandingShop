import { Image, Item, Link, List, Wrapper } from './styles';
import { typographyTypes } from '../../../../atoms/Typography/constants';
import Typography from '../../../../atoms/Typography/Typography';
import location from '../../../../../assets/svg/location-marker-black.svg';
import phone from '../../../../../assets/svg/phone-black.svg';
import clock from '../../../../../assets/svg/clock-black.svg';
import mail from '../../../../../assets/svg/mail.svg';

const Contacts = () => {
  return (
    <Wrapper>
      <Typography type={ typographyTypes.subtitle } Tag="span">CONTACT US</Typography>
      <List>
        <Item>
          <Image src={ location } alt="location"/>
          <Item>
            <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.7)">
              Belarus, Gomel, Lange 17
            </Typography>
          </Item>
        </Item>
        <Item>
          <Image src={ phone } alt="phone"/>
          <Item>
            <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.7)">
              +375 29 100 20 30
            </Typography>
          </Item>
        </Item>
        <Item>
          <Image src={ clock } alt="clock"/>
          <Item>
            <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.7)">
              All week 24/7
            </Typography>
          </Item>
        </Item>
        <Item>
          <Image src={ mail } alt="mail"/>
          <Link href='mailto:info@clevertec.ru'>
            <Typography type={ typographyTypes.body } Tag="span" color="rgba(18, 18, 18, 0.7)">
              info@clevertec.ru
            </Typography>
          </Link>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Contacts;