import Coupon from '~/components/coupon/coupon.component';
import { JSX } from 'react';

import { FlatList, SafeAreaView, Text, View } from 'react-native';

const couponsData = [
  {
    id: 1,
    titulo: 'Bella Napoli Pizzaria',
    descricao: '🎁 15% OFF em pedidos acima de R$ 50',
    categoria: 'Restaurante',
    validade: '21-07-2025',
  },

  {
    id: 2,
    titulo: 'Bella Napoli Pizzaria',
    descricao: '🎁 15% OFF em pedidos acima de R$ 50',
    categoria: 'Restaurante',
    validade: '21-08-2025',
  },
];

const Home = (): JSX.Element => {
  // return <ScreenContent path="screens/one.tsx" title="Tab One" />;
  return (
    <SafeAreaView className={styles.container}>
      {/* <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children} */}

      <View className="h-48 gap-3">
        <Text className="text-base font-bold text-neutral-900">Recomendados para você</Text>
        <FlatList
          data={couponsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => {
            return <Coupon {...item.item} onPressViewCoupon={() => console.log('Pressed')} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="h-48 gap-3">
        <Text className="text-base font-bold text-neutral-900">Aproveite antes que acabe!</Text>
        <FlatList
          data={couponsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => {
            return <Coupon {...item.item} onPressViewCoupon={() => console.log('Pressed')} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: `items-center flex-1 pt-8 pl-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

export default Home;
