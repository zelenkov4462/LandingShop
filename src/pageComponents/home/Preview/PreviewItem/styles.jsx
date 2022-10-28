import styled from 'styled-components';

export const PreviewItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PreviewImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 0;
  margin-right: 13px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const Text = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`