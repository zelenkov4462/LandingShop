import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #121212;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 720px) {
    gap: 52px;
  }
`;

export const Text = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SubscribeEmail = styled.input.attrs({
  type: 'email',
  placeholder: 'Enter your email',
})`
  width: 400px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: center;
  border: none;
  color: #ffffff;

  @media (max-width: 992px) {
    width: 200px;
  }
`;