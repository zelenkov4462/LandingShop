import { ProductWrapper, TitleWrapper, Wrapper } from './styled';
import Typography from '../../../../components/atoms/Typography/Typography';
import { typographyTypes } from '../../../../components/atoms/Typography/constants';
import SliderButton from '../../../../components/atoms/SliderButton/SliderButton';
import related1 from '../../../../assets/img/related1.png';
import related2 from '../../../../assets/img/related2.png';
import related3 from '../../../../assets/img/related3.png';
import related4 from '../../../../assets/img/related4.png';
import CardProduct from '../../../../components/molecules/CardProduct/CardProduct';
import { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Related = () => {
  const related = [{
    id: 1,
    price: 30,
    image: related1,
    text: 'Women`s tracksuit Q109',
    rating: 2,
  },
    {
      id: 2,
      price: 30,
      image: related2,
      text: 'Women`s tracksuit Q109',
      rating: 5,
      sale: 40,
    },
    {
      id: 3,
      price: 30,
      image: related3,
      text: 'Women`s tracksuit Q109',
      rating: 3,
    },
    {
      id: 4,
      price: 30,
      image: related4,
      text: 'Women`s tracksuit Q109',
      rating: 1,
    },
    {
      id: 5,
      price: 40,
      image: related1,
      text: 'Women`s tracksuit Q109',
      rating: 2,
    },
    {
      id: 6,
      price: 55,
      image: related2,
      text: 'Women`s tracksuit Q109',
      rating: 5,
      sale: 20,
    },
    {
      id: 7,
      price: 60,
      image: related3,
      text: 'Women`s tracksuit Q109',
      rating: 3,
    },
    {
      id: 8,
      price: 70,
      image: related4,
      text: 'Women`s tracksuit Q109',
      rating: 1,
    }];

  return (
    <Wrapper>
      <TitleWrapper>
        <Typography type={ typographyTypes.title_22 } Tag="span">
          RELATED PRODUCTS
        </Typography>
      </TitleWrapper>
      <Swiper
        style={ { width: '1110px', overflow: 'visible' } }
        slidesPerView={ 4 }
        loop={ true }
        spaceBetween={ 30 }
        slidesPerGroup={ 1 }
        loopFillGroupWithBlank={ true }
        modules={ [Controller, Navigation] }
      >
        <ProductWrapper>
          <SliderButton type="left"/>
          <SliderButton type="right"/>
        </ProductWrapper>
        {
          related.map(item => {
            return (
              <SwiperSlide key={ item.id }>
                <CardProduct link="women" id={ item.id } image={ item.image } price={ item.price }
                             rating={ item.rating } sale={ item.sale } text={ item.text }/>
              </SwiperSlide>

            );
          })
        }
      </Swiper>
    </Wrapper>
  );
};

export default Related;