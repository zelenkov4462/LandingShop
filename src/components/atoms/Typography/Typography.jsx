import styled from 'styled-components';

import { typographyTypes } from './constants';

const Title36 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Title26 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 26px;
  line-height: 36px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Title22 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Title16 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Title14 = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Subtitle = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.06em;
  color: ${ props => props.color ?? '#121212' };
`;
const Body = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: ${ props => props.color ?? '#121212' };
`;
const BodyBold = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: ${ props => props.color ?? '#121212' };
`;
const Small = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 11px;
  line-height: 18px;
  color: ${ props => props.color ?? '#121212' };
`;
const Button = styled.span`
  font-family: 'Spartan', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  line-height: 14.56px;
  letter-spacing: 0.06em;
  text-align: center;
  color: ${ props => props.color ?? '#121212' };
`;

const Typography = ({ type, Tag, children, color }) => {
  switch (type) {
    case typographyTypes.title_36:
      return <Tag><Title36 color={ color }>{ children }</Title36></Tag>;

    case typographyTypes.title_26:
      return <Tag><Title26 color={ color }>{ children }</Title26></Tag>;

    case typographyTypes.title_22:
      return <Tag><Title22 color={ color }>{ children }</Title22></Tag>;

    case typographyTypes.title_16:
      return <Tag><Title16 color={ color }>{ children }</Title16></Tag>;

    case typographyTypes.title_14:
      return <Tag><Title14 color={ color }>{ children }</Title14></Tag>;

    case typographyTypes.subtitle:
      return <Tag><Subtitle color={ color }>{ children }</Subtitle></Tag>;

    case typographyTypes.body:
      return <Tag><Body color={ color }>{ children }</Body></Tag>;

    case typographyTypes.bodyBold:
      return <Tag><BodyBold color={ color }>{ children }</BodyBold></Tag>;

    case typographyTypes.small:
      return <Tag><Small color={ color }>{ children }</Small></Tag>;

    case typographyTypes.button:
      return <Tag><Button color={ color }>{ children }</Button></Tag>;

    default:
      return <Tag><Title14 color={ color }>{ children }</Title14></Tag>;
  }
};

export default Typography;