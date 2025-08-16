import { JSX } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CouponDetailsContainerProps, CouponDetailsProps } from './couponDetails.types';
import LocalIcon from '~/assets/Local.icon';
import CalendarIcon from '~/assets/calendar.iscon';
import CouponsIcon from '~/assets/coupons.icon';
import * as Containers from './couponDetails.container';

const CouponDetails = (props: CouponDetailsProps): JSX.Element => {
  return (
    <Containers.CouponDetailsContainer>
      {(containerProps: CouponDetailsContainerProps): JSX.Element => {
        return (
          <SafeAreaView className="h-screen bg-neutral-100 ">
            <View className="rounded-2xl bg-white px-4 py-6">
              <View className="flex-row justify-between">
                <View>
                  <Text className="text-xl font-bold text-neutral-800">Lux Hair Studio</Text>
                  <View className="flex-row items-center gap-3">
                    <Text className="font-medium text-neutral-500">Beleza</Text>
                    <View className="flex-row items-center gap-1">
                      <LocalIcon />
                      <Text className="font-medium text-neutral-500">1,2 Km</Text>
                    </View>
                  </View>
                </View>
                <View className="size-10 rounded-full bg-customOrange-500" />
              </View>
              <View className="mb-4 mt-4 rounded-2xl border-[1px] border-gray-200 bg-neutral-100 px-4 py-5">
                <Text className="mb-2 text-xl font-bold text-neutral-800">
                  Corte feminino + hidratação por R$ 49,90
                </Text>
                <Text className="mb-4 text-base text-neutral-500">
                  Promoção válida apenas para novos clientes. De segunda a sexta, das 10h às 17h.
                </Text>
                <View className="flex-row items-center gap-2">
                  <CalendarIcon />
                  <Text className="text-sm font-semibold text-neutral-700">Válido até 25/07</Text>
                </View>
                <TouchableOpacity
                  className="mt-4 flex-row items-center justify-center gap-2 rounded-2xl bg-customOrange-500 py-3"
                  onPress={containerProps.actions.goToConsumeCoupons}>
                  <Text className="text-sm font-semibold text-white">Usar cupom agora</Text>
                  <CouponsIcon />
                </TouchableOpacity>
              </View>
              <View>
                <Text className="text-base font-bold text-neutral-800">Sobre o local</Text>
                <View className="mt-2 flex-row items-center gap-2">
                  <LocalIcon width="15" height="14" />
                  <Text className="text-sm font-medium text-neutral-500">
                    Rua das Acácias, 125 — Vila Verde
                  </Text>
                </View>
                <View className="mt-1 flex-row items-center gap-2">
                  <LocalIcon width="15" height="14" />
                  <Text className="text-sm font-medium text-neutral-500">
                    Seg. a Sáb. - 9h às 19h
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        );
      }}
    </Containers.CouponDetailsContainer>
  );
};

export default CouponDetails;
