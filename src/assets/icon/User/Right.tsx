import React from 'react';
import Svg, {G, Polygon} from 'react-native-svg';

const NextIcon = (props: any) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    fill={props.fill || '#000'}
    {...props}>
    <G>
      <Polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
    </G>
  </Svg>
);

export default NextIcon;
