import Coupon from '~/components/coupon/coupon.component';
import { JSX } from 'react';

import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import SimpleCard from '~/components/simpleCard/simpleCard.component';
import { CategoryEnum, CategoryEnumLabels } from '~/utils/enums/category.enum';
import BarberShopIcon from '~/assets/barberShop';
import BoxIcon from '~/assets/boxIcon';

import BoneIcon from '~/assets/boneIcon';
import GymIcon from '~/assets/gymIcon';
import OpenEndWrenchIcon from '~/assets/openEndWrench';
import CarIcon from '~/assets/carIcon';

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

const categories = [
  { id: 1, name: 'BEAUTY' },
  { id: 2, name: 'SERVICES' },
  { id: 3, name: 'AUTOMOTIVE' },
  { id: 4, name: 'PET' },
  { id: 5, name: 'GYM' },
  { id: 6, name: 'VARIOUS_FIXES' },
];

const icon = {
  [CategoryEnum.BEAUTY]: <BarberShopIcon />,
  [CategoryEnum.SERVICES]: <BoxIcon />,
  [CategoryEnum.AUTOMOTIVE]: <CarIcon />,
  [CategoryEnum.PET]: <BoneIcon />,
  [CategoryEnum.GYM]: <GymIcon />,
  [CategoryEnum.VARIOUS_FIXES]: <OpenEndWrenchIcon />,
};

const Home = (): JSX.Element => {
  // return <ScreenContent path="screens/one.tsx" title="Tab One" />;
  return (
    <SafeAreaView className={styles.container}>
      {/* <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children} */}

      <Image
        className="ml-4 mr-4 flex h-[150px] w-[95%] items-center justify-center rounded-lg"
        source={require('../assets/homeBanner.png')}
        resizeMode="cover"
      />

      <View className="mt-4 flex-row">
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={categories}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          numColumns={3}
          renderItem={(item) => {
            return (
              <SimpleCard
                name={CategoryEnumLabels[item.item.name as keyof typeof CategoryEnum]}
                icon={icon[item.item.name as keyof typeof CategoryEnum]}
              />
            );
          }}
        />
      </View>

      <View className="mt-4 h-48 gap-3">
        <Text className="ml-4  text-base font-bold text-neutral-900">Recomendados para você</Text>
        <FlatList
          data={couponsData}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={(item) => (
            <Coupon
              {...item.item}
              onPressViewCoupon={() => console.log('Pressed')}
              isLastChild={item.index === couponsData.length - 1}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="h-48 gap-3">
        <Text className="ml-4 text-base font-bold text-neutral-900">
          Aproveite antes que acabe!
        </Text>
        <FlatList
          data={couponsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => (
            <Coupon
              {...item.item}
              onPressViewCoupon={() => console.log('Pressed')}
              isLastChild={item.index === couponsData.length - 1}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: `items-center flex-1 pt-8`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};

export default Home;
