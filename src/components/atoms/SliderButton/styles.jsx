import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  transition: 500ms;
  z-index: 3;
  transform: ${ props => {
    switch (props.type) {
      case 'left':
        return 'rotate(0deg)';

      case 'right':
        return 'rotate(180deg)';

      case 'top':
        return 'rotate(90deg)';

      case 'bottom':
        return 'rotate(270deg)';
      default:
        return 'rotate(0deg)';
    }
  }
  };
  
  :disabled {
    :hover {
      cursor: default ;
      background-color: #ffffff;
      border-radius: 50%;
    }
    
    ::before {
      background-color: rgba(18, 18, 18, 0.2);
    }
    
    ::after {
      background-color: rgba(18, 18, 18, 0.2);
    }
  }
}

  :hover {
    cursor: pointer;
    background-color: rgba(230, 230, 230, 0.6);
    border-radius: 50%;
  }

  ::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 1px;
    border-radius: 50px;
    transform: rotate(45deg);
    background-color: rgba(18, 18, 18, 0.5);
    top: 24px;
    left: 13px;
  }

  ::after {
    position: absolute;
    content: '';
    width: 12px;
    height: 1px;
    border-radius: 50px;
    transform: rotate(-45deg);
    background-color: rgba(18, 18, 18, 0.5);
    top: 16px;
    left: 13px;
`;