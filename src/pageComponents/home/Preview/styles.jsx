import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const PreviewSection = styled.section`
  margin-top: 32px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const SliderWrapper = styled.article`
  width: 540px;
  height: 490px;
  text-align: center;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const SliderButtonLeft = styled.div`
  position: absolute;
  top: 45%;
  left: 15px;
  z-index: 1;
`;

export const SliderItemWrapper = styled(SwiperSlide)`
  background-image: url(${ props => props.image });
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 490px;
  width: 540px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const SliderButtonRight = styled.div`
  position: absolute;
  top: 45%;
  right: 15px;
  z-index: 1;
`;

export const SliderStyle = styled.div`
  background: #ffffff;
  height: 100px;
  width: 289px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: default;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  flex-basis: calc(50% - 15px);
  flex-grow: 1;
`;

export const PreviewContainerLarge = styled(PreviewContainer)`
  height: 260px;
  flex-basis: 100%;
  flex-grow: 1;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  flex-grow: 1;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`;
