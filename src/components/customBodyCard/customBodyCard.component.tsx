import { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';

type ButtonProps = {} & ViewProps;

const CustomBodyCard = forwardRef<View, ButtonProps>(
  ({ children, ...customBodyCardProps }, ref) => {
    return (
      <View
        ref={ref}
        {...customBodyCardProps}
        className={`${styles.container} ${customBodyCardProps.className}`}>
        {children}
      </View>
    );
  }
);

CustomBodyCard.displayName = 'CustomBodyCard';

const styles = {
  container: 'items-center justify-between',
};

export default CustomBodyCard;
