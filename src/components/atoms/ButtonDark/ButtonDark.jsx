import { Text, Wrapper } from './styles';

const ButtonDark = ({ children, width, height }) => {
  return (
    <Wrapper width={ width } height={ height }>
      <Text>
        { children }
      </Text>
    </Wrapper>
  );
};

export default ButtonDark;