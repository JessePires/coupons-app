import { JSX } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
const CustomTabBar = ({ state, descriptors, navigation }): JSX.Element => {
  return (
    <View
      className={`mb-[24px] w-[95%] flex-row self-center rounded-2xl border-t border-gray-200 bg-white`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;

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
          <TouchableOpacity key={route.key} onPress={onPress} className="flex-1 items-center py-2">
            {icon}
            <Text className={isFocused ? 'text-[#EE4D2D]' : 'text-gray-500'}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
