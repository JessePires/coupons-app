import { JSX } from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({
  color = '#D0011B',
  width = '15',
  height = '20',
}: {
  color?: string;
  width?: string;
  height?: string;
}): JSX.Element => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 10C10.2614 10 12.5 7.76142 12.5 5C12.5 2.23858 10.2614 0 7.5 0C4.73858 0 2.5 2.23858 2.5 5C2.5 7.76142 4.73858 10 7.5 10Z"
        fill={color}
      />
      <Path
        d="M7.5 11.6667C3.35977 11.6713 0.00460937 15.0265 0 19.1667C0 19.6269 0.373086 20 0.83332 20H14.1666C14.6269 20 15 19.6269 15 19.1667C14.9954 15.0265 11.6402 11.6713 7.5 11.6667Z"
        fill={color}
      />
    </Svg>
  );
};

export default ProfileIcon;
