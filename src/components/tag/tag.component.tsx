import { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';

type ButtonProps = {} & ViewProps;

const Tag = forwardRef<View, ButtonProps>(({ children, ...tagProps }, ref) => {
  return (
    <View ref={ref} {...tagProps} className={`${styles.tag} ${tagProps.className}`}>
      {children}
    </View>
  );
});

Tag.displayName = 'Tag';

const styles = {
  tag: 'items-center justify-center border-[1px] rounded-full',
};

export default Tag;
