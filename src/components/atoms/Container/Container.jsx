import { ContainerStyled } from './styles';

const Container = ({ children }) => {
  return (
    <ContainerStyled>
      { children }
    </ContainerStyled>
  );
};

export default Container;