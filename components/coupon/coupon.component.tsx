import CouponLeftBg from 'assets/CouponLeftBg';
import LocalIcon from 'assets/Local.icon';
import { Tag } from 'components/tag/tag.component';

import { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Coupon = (): JSX.Element => {
  return (
    <View className="flex flex-row">
      <View>
        <CouponLeftBg />
      </View>
      <View className="w-72 rounded-r-2xl border-slate-400 bg-white p-3">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-base">Bella Napoli Pizzaria</Text>
            <Text className="text-xs font-medium">15% OFF em pedidos acima de R$50</Text>
          </View>
          <View className="bg-customOrange-500 size-10 rounded-full border-[1px] border-gray-300"></View>
        </View>
        <View className="flex-row gap-1 pb-3 pt-2">
          <Tag className="border-customOrange-300 bg-customOrange-200 h-7 w-[60px]">
            <Text className="text-customOrange-600 text-[8px] font-bold">Restaurante</Text>
          </Tag>
          <Tag className="border-customOrange-300 bg-customOrange-200 h-7 w-[60px] flex-row gap-1">
            <LocalIcon />
            <Text className="text-customOrange-600 text-[8px] font-bold">A 850m</Text>
          </Tag>
        </View>
        <View className="flex flex-row items-end justify-between">
          <Text className="text-sm text-gray-500">Válido até 22/07</Text>
          <TouchableOpacity className="h-8 w-28 items-center justify-center rounded-full border-[1px] border-gray-300 bg-white">
            <Text className="text-sm font-semibold text-gray-700">Ver Cupom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Coupon;
