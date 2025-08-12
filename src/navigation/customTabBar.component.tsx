import { JSX } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }): JSX.Element => {
  return (
    <View
      className={`mb-[24px] w-[95%] flex-row self-center rounded-2xl border-t border-gray-200 bg-white`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;
        const isCouponsRoute = route.name === 'Coupons';

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? '#EE4D2D' : '#999',
              size: 24,
            })
          : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} className="flex-1 items-center py-3">
            <View
              className={`${isCouponsRoute ? 'absolute bottom-6 size-16 items-center justify-center rounded-full border-[6px] border-white bg-customOrange-500' : ''} ${isCouponsRoute && isFocused ? 'bg-customOrange-600' : ''}`}>
              {icon}
            </View>
            <Text
              className={`mt-1 text-xs ${isFocused && !isCouponsRoute ? 'text-[#EE4D2D]' : 'text-gray-500'} ${isCouponsRoute ? 'top-[19px]' : ''}`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
