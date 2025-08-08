import { JSX } from 'react';
import Svg, { Path } from 'react-native-svg';

const WhiteCouponLeftBg = ({
  color = '#FEFEFF',
  height = '104',
  width = '11',
}: {
  color?: string;
  height?: string;
  width?: string;
}): JSX.Element => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 11 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.6122 0V54.7368C10.6122 61.4546 10.6122 102 10.6122 102V104C4.75126 104 4.27341e-08 98.5541 0 91.8363V90.0117C3.51659 90.0117 6.36735 86.7442 6.36735 82.7134C6.36735 78.6827 3.51659 75.4152 0 75.4152V69.3333C3.51659 69.3333 6.36735 66.0658 6.36735 62.0351C6.36735 58.0044 3.51659 54.7368 0 54.7368V48.655C3.51659 48.655 6.36735 45.3874 6.36735 41.3567C6.36735 37.326 3.51659 34.0585 0 34.0585V27.9766C3.51659 27.9766 6.36735 24.7091 6.36735 20.6784C6.36735 16.6477 3.51659 13.3801 0 13.3801V12.1637C0 5.4459 4.75126 0 10.6122 0Z"
        fill="#FEFEFF"
      />
    </Svg>
  );
};

export default WhiteCouponLeftBg;
