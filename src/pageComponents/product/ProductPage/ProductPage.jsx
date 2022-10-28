import Container from '../../../components/atoms/Container/Container';
import SliderButton from '../../../components/atoms/SliderButton/SliderButton';
import Divider from '../../../components/atoms/Divider/Divider';
import Color from './Color/Color';
import Size from './Size/Size';
import Price from './Price/Price';
import Guarantees from './Guarantees/Guarantees';
import Typography from '../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../components/atoms/Typography/constants';
import Related from './Related/Related';
import Additional from './Additional/Additional';
import Reviews from './Reviews/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import slider from '../../../assets/img/sliderimage.png';
import {
  Content, SliderButtonLeft, SliderButtonRight,
  SliderWrapper, SliderWrapperButtons, SliderWrapperPreview,
  Wrapper,
} from './styles';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductPage = ({ link }) => {
  const [sliderStart, setSliderStart] = useState(true);
  const [sliderEnd, setSliderEnd] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sliders = [slider, slider, slider, slider]

  return (
    <Container>
      <Wrapper data-test-id={ `product-page-${ link.toLowerCase() }` }>
        <SliderWrapper>
          <SliderWrapperPreview>
            <SliderWrapperButtons>
              <SliderButton className='sliderBottom' disabled={ sliderStart } type="top"/>
              <SliderButton className='sliderTop' disabled={ sliderEnd } type="bottom"/>
            </SliderWrapperButtons>
            <Swiper
              onSwiper={ setThumbsSwiper }
              spaceBetween={ 16 }
              slidesPerView={ 4 }
              freeMode={ true }
              watchSlidesProgress={ true }
              modules={ [FreeMode, Thumbs] }
              direction={ 'vertical' }
              onSlideChange={ (swiper) => {
                if (swiper.isBeginning) {
                  setSliderStart(true);
                  setSliderEnd(false);
                  return;
                }
                if (swiper.isEnd) {
                  setSliderEnd(true);
                  setSliderStart(false);
                  return;
                }
                setSliderStart(false);
                setSliderEnd(false);
              } }
            >
              {sliders.map((item, index) => {
                return (
                  <SwiperSlide key={index} style={{width: '94px', height: '114px', cursor: 'pointer'}}>
                    <img style={{width: '94px', height: '114px'}} src={item} alt="slider"/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </SliderWrapperPreview>
          <Swiper
            style={ {
              width: '448px'
            } }
            spaceBetween={ 10 }
            thumbs={ { swiper: thumbsSwiper } }
            modules={ [FreeMode, Navigation, Thumbs] }

            navigation={{
              nextEl: '.sliderTop',
              prevEl: '.sliderBottom',
            }}
            onSlideChange={ (swiper) => {
              if (swiper.isBeginning) {
                setSliderStart(true);
                setSliderEnd(false);
                return;
              }
              if (swiper.isEnd) {
                setSliderEnd(true);
                setSliderStart(false);
                return;
              }
              setSliderStart(false);
              setSliderEnd(false);
            } }
          >
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider} alt="slider"/>
            </SwiperSlide>
            <SliderButtonLeft>
              <SliderButton disabled={ sliderStart } type="left"/>
            </SliderButtonLeft>
            <SliderButtonRight>
              <SliderButton disabled={ sliderEnd } type="right"/>
            </SliderButtonRight>
          </Swiper>
        </SliderWrapper>
        <Content>
          <Color/>
          <Size/>
          <Divider/>
          <Price/>
          <Divider/>
          <Guarantees/>
          <Divider/>
          <Typography type={ typographyTypes.subtitle } Tag="span" color="rgba(18,18,18,0.6)">
            DESCRIPTION
          </Typography>
          <Divider/>
          <Additional/>
          <Divider/>
          <Reviews/>
          <Divider/>
        </Content>
      </Wrapper>
      <Related/>
    </Container>
  );
};

export default ProductPage;