import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ReportIcon = ({width = 20, height = 21, color = 'black'}: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill="none">
    <Path
      d="M17 16.5H5V9.5C5 6.1865 7.6865 3.5 11 3.5C14.3135 3.5 17 6.1865 17 9.5V16.5Z"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M3 20H19M1 5.5L2.5 6M5.5 1L6 2.5M4 4L2.5 2.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ReportIcon;
