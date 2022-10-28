import { ButtonStyled } from './styles';
import { useSwiper } from 'swiper/react';

const SliderButton = ({ type, disabled, className }) => {
  const swiper = useSwiper();
  const onClick = () => {
    switch (type) {
      case 'right':
        swiper.slideNext();
        return;
      case 'left':
        swiper.slidePrev();
        return;
      case 'bottom':
        swiper.slideNext();
        return;
      case 'top':
        swiper.slidePrev();
        return;
      default: swiper.slideNext();
    }
  };

  return <ButtonStyled disabled={ disabled } onClick={ onClick } type={ type } className={className}/>;
};

export default SliderButton;
