import CouponLeftBg from 'assets/CouponLeftBg';
// import LocalIcon from 'assets/Local.icon';
import { Tag } from 'components/tag/tag.component';

import { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CouponProps } from './coupon.type';
import { customFormatDate } from 'utils/date.utils';

const Coupon = (props: CouponProps): JSX.Element => {
  return (
    <View className="mr-2 flex h-[120px] flex-row">
      <View>
        <Text className="absolute left-3 top-14 z-10 -rotate-90 text-base font-bold text-white">
          CUPOM
        </Text>
        <CouponLeftBg height="120" width="70" />
      </View>
      <View className="w-[230px] rounded-r-2xl border-slate-400 bg-white p-3">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-[12px]">{props.titulo}</Text>
            <Text className="text-[8px] font-medium">{props.descricao}</Text>
          </View>
          <View className="size-10 rounded-full border-[1px] border-gray-300 bg-customOrange-500"></View>
        </View>
        <View className="flex-row gap-1 pb-1 pt-1">
          <Tag className="h-7 w-[60px] border-customOrange-300 bg-customOrange-200">
            <Text className="text-[8px] font-bold text-customOrange-600">{props.categoria}</Text>
          </Tag>
          {/* <Tag className="h-7 w-[60px] flex-row gap-1 border-customOrange-300 bg-customOrange-200">
            <LocalIcon />
            <Text className="text-[8px] font-bold text-customOrange-600">A 850m</Text>
          </Tag> */}
        </View>
        <View className="flex flex-row items-end justify-between">
          <Text className="text-[8px] text-gray-500">{customFormatDate(props.validade)}</Text>
          <TouchableOpacity className="h-8 w-24 items-center justify-center rounded-full border-[1px] border-gray-300 bg-white">
            <Text className="text-[10px] font-semibold text-gray-700">Ver Cupom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Coupon;
