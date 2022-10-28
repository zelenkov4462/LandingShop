import styled from 'styled-components';
import subscribe1 from '../../../assets/img/subscribe1.png'
import subscribe2 from '../../../assets/img/subscribe2.png'

export const SubscribeWrapper = styled.section`
  height: 580px;
  width: 100%;
  background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  width: max-content;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  z-index: 1;
`;

export const ImageContainerLeft = styled.div`
  background-image: url(${subscribe1});
  background-repeat: no-repeat;
  width: 311px;
  height: 584px;
  margin-right: -50px;
  margin-bottom: -72px;
  z-index: 2;

  @media (max-width: 992px) {
    display: none;
  }
`

export const ImageContainerRight = styled.div`
  background-image: url(${subscribe2});
  width: 219px;
  height: 524px;
  margin-left: -15px;
  margin-bottom: -30px;
  z-index: 2;

  @media (max-width: 992px) {
    display: none;
  }
`

export const SubscribeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 96px 96px 96px;
`;

export const SubscribeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const SubscribeEmail = styled.input.attrs({
  type: 'email',
  placeholder: 'Enter your email',
})`
  margin: 32px 0 24px 0;
  color: rgba(18, 18, 18, 0.4);
  width: 340px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  text-align: center;
  border: none;

  :hover {
    color: rgba(18, 18, 18, 0.6);
  }
`;

export const SubscribeButton = styled.button`
  width: 340px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;