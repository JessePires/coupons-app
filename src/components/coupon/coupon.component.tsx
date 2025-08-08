import { JSX } from 'react';
import { CouponProps } from './coupon.type';
import { Text, TouchableOpacity, View } from 'react-native';
import CouponLeftBg from '~/assets/CouponLeftBg';
import Tag from '../tag/tag.component';
import { customFormatDate } from '~/utils/date.utils';
import WhiteCouponLeftBg from '~/assets/whiteCouponLeftBg';

const Coupon = ({ variant = 'primary', ...props }: CouponProps): JSX.Element => {
  return (
    <View className={`ml-4 flex h-[120px] flex-row ${props.isLastChild ? 'mr-4' : ''}`}>
      {variant && variant === 'primary' && (
        <View>
          <Text className="absolute left-3 top-14 z-10 -rotate-90 text-base font-bold text-white">
            CUPOM
          </Text>
          <CouponLeftBg height="120" width="70" />
        </View>
      )}

      {variant && variant === 'secondary' && (
        <View>
          <WhiteCouponLeftBg height="120" width="15" />
        </View>
      )}
      <View className="w-[220px] justify-between rounded-r-2xl border-slate-400 bg-white p-3">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-[12px] text-neutral-800" testID="couponTitle">
              {props.titulo}
            </Text>
            <Text className="text-[8px] font-medium text-neutral-800" testID="couponDescription">
              {props.descricao}
            </Text>
          </View>
          <View
            className="size-8 rounded-full border-[1px] border-neutral-200 bg-customOrange-500"
            testID="couponLogo"></View>
        </View>
        <View className="flex-row gap-1 pb-1 pt-2">
          <Tag className="h-7 w-[60px] border-customOrange-300 bg-customOrange-200">
            <Text className="text-[8px] font-bold text-customOrange-600" testID="couponCategory">
              {props.categoria}
            </Text>
          </Tag>
          {/* <Tag className="h-7 w-[60px] flex-row gap-1 border-customOrange-300 bg-customOrange-200">
            <LocalIcon />
            <Text className="text-[8px] font-bold text-customOrange-600">A 850m</Text>
          </Tag> */}
        </View>
        <View className="flex flex-row items-end justify-between">
          <Text
            className="text-[8px] text-gray-500"
            testID="couponValidity">{`Válido até ${customFormatDate(props.validade)}`}</Text>
          <TouchableOpacity
            className="h-8 w-24 items-center justify-center rounded-full border-[1px] border-neutral-200 bg-white"
            onPress={props.onPressViewCoupon}
            testID="couponOnPress">
            <Text className="text-[10px] font-semibold text-neutral-800">Ver Cupom</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Coupon;
