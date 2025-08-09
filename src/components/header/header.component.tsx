import { JSX } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { HeaderProps } from './header.types';
import BellRingIcon from '~/assets/bellRing.icon.';

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <View className={`${props.className}`}>
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-bold text-neutral-900">Olá Alex!</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity className="size-9 items-center justify-center rounded-full border-[1px] border-neutral-200">
            <BellRingIcon />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full">
            <Image
              source={require('../../assets/mocks/profile.jpg')}
              resizeMode="center"
              className="size-9 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
