import { JSX } from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarIcon from '~/assets/calendar.iscon';

const ConsumeCoupon = (): JSX.Element => {
  return (
    <SafeAreaView className="h-screen items-center justify-center">
      <Text className="mb-8 text-2xl font-bold text-neutral-900">Aqui está seu cupom!</Text>
      <QRCode value="COUPON TEST" size={200} />
      <Text className="mt-3 rounded-xl bg-gray-200 px-6 py-2">BELEZA25</Text>
      <View className="w-3/4">
        <Text className="mt-4 text-center text-base text-neutral-500">
          Mostre este QR code no caixa do estabelecimento Ou informe o código acima no momento do
          pagamento
        </Text>
      </View>
      <View className="mt-6 flex-row items-center gap-2">
        <CalendarIcon />
        <Text className="text-sm font-semibold text-neutral-700">Válido até 25/07</Text>
      </View>
    </SafeAreaView>
  );
};

export default ConsumeCoupon;
