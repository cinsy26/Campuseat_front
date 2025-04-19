import React from 'react';
import Svg, {G, Polygon} from 'react-native-svg';

const PreviousIcon = (props: any) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    fill={props.fill || '#000'}
    {...props}>
    <G>
      <Polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3" />
    </G>
  </Svg>
);

export default PreviousIcon;
