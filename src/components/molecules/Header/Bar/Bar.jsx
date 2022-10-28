import Social from '../../../atoms/Social/Social';
import LabelWithIcon from '../../../atoms/LabelWithIcon/LabelWithIcon';
import Container from '../../../atoms/Container/Container';

import phone from '../../../../assets/svg/phone.svg';
import location from '../../../../assets/svg/location-marker.svg';
import clock from '../../../../assets/svg/clock.svg';
import { WrapperBackground, FlexContainer, Wrapper } from './styles';

const Bar = () => {
  return (
    <WrapperBackground>
      <Container>
        <Wrapper>
          <FlexContainer>
            <LabelWithIcon img={ phone } text="+375 29 100 20 30"/>
            <LabelWithIcon img={ location } text="Belarus, Gomel, Lange 17"/>
            <LabelWithIcon img={ clock } text="All week 24/7"/>
          </FlexContainer>
          <Social/>
        </Wrapper>
      </Container>
    </WrapperBackground>
  );
};

export default Bar;