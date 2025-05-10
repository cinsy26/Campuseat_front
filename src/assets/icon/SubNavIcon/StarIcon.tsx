import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IconProps {
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const StarIcon: React.FC<IconProps> = ({
  size = 24,
  fillColor = '#FACC15',
  strokeColor = '#000',
  strokeWidth = 2,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L14.09 8.26H20.545L15.227 12.14L17.318 18.4L12 14.52L6.682 18.4L8.773 12.14L3.455 8.26H9.91L12 2Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default StarIcon;
