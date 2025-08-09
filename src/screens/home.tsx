import Coupon from '~/components/coupon/coupon.component';
import { JSX } from 'react';

import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import SimpleCard from '~/components/simpleCard/simpleCard.component';
import { CategoryEnum, CategoryEnumLabels } from '~/utils/enums/category.enum';
import BarberShopIcon from '~/assets/barberShop';
import BoxIcon from '~/assets/boxIcon';

import BoneIcon from '~/assets/boneIcon';
import GymIcon from '~/assets/gymIcon';
import OpenEndWrenchIcon from '~/assets/openEndWrench';
import CarIcon from '~/assets/carIcon';
import CustomBodyCard from '~/components/customBodyCard/customBodyCard.component';
import Tag from '~/components/tag/tag.component';
import PartnerStablishmentLogoIcon from '~/assets/partnerEstablishments';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '~/components/header/header.component';
import LocalIcon from '~/assets/Local.icon';
import MoneyIcon from '~/assets/money.icon';

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

const partnerEstablishments = [
  { id: 1, nome: 'Barbearia Alpha', cupons_disoniveis: 2 },
  { id: 2, nome: 'Pizzaria', cupons_disoniveis: 5 },
  { id: 3, nome: 'Barbearia Alpha', cupons_disoniveis: 2 },
  { id: 4, nome: 'Pizzaria', cupons_disoniveis: 5 },
  { id: 5, nome: 'Barbearia Alpha', cupons_disoniveis: 2 },
  { id: 6, nome: 'Pizzaria', cupons_disoniveis: 5 },
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
  const homeSections = [
    { type: 'header' },
    { type: 'banner' },
    { type: 'categories' },
    {
      type: 'partners',
      title: 'Estabelecimentos parceiros perto de você',
      data: partnerEstablishments,
    },
    {
      type: 'section',
      title: 'Recomendados para você',
      data: couponsData,
    },
    {
      type: 'section',
      title: 'Aproveite antes que acabe!',
      data: couponsData,
    },
    {
      type: 'recentlyViewed',
      title: 'Vistos recentemente',
      data: couponsData,
    },
  ];

  const formatCouponsQuantity = (quantity: number): string => {
    return quantity > 1 || quantity === 0 ? `${quantity} cupons` : `${quantity} cupom`;
  };

  const renderItems = ({ item }: { item: (typeof homeSections)[number] }) => {
    switch (item.type) {
      case 'header':
        return (
          <View className="mx-4 my-2">
            <Header className="mb-2" />
            <View className="mb-4 mt-2 flex-row justify-between">
              <View className="flex-row items-center gap-1">
                <LocalIcon width="19" height="19" />
                <View>
                  <Text className="text-xs text-neutral-600">Ofertas em</Text>
                  <Text className="text-sm font-bold text-customOrange-600">Vila Mariana, SP</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-end text-xs text-neutral-600">Economia de</Text>
                <Tag className="flex-row gap-2 border-customOrange-300 bg-customOrange-200 p-2">
                  <MoneyIcon />
                  <Text className="text-xs font-bold text-customOrange-600">R$ 146,00</Text>
                </Tag>
              </View>
            </View>
          </View>
        );
      case 'banner':
        return (
          <Image
            className="ml-4 mr-4 flex h-[150px] w-[92%] items-center justify-center rounded-lg"
            source={require('../assets/homeBanner.png')}
            resizeMode="cover"
          />
        );
      case 'categories':
        return (
          <View className="mt-4 flex-row flex-wrap justify-center px-2">
            {categories.map((category) => (
              <SimpleCard
                key={category.id}
                name={CategoryEnumLabels[category.name as keyof typeof CategoryEnum]}
                icon={icon[category.name as keyof typeof CategoryEnum]}
              />
            ))}
          </View>
        );
      case 'partners':
        return (
          <View className="mt-4 gap-3">
            <Text className="ml-4 text-base font-bold text-neutral-900">{item.title}</Text>
            <FlatList
              data={partnerEstablishments}
              keyExtractor={(partner) => partner.id.toString()}
              renderItem={({ item: partnerEstbalishment, index }) => {
                return (
                  <CustomBodyCard
                    key={partnerEstbalishment.id}
                    className={`ml-4 h-32 w-28 rounded-xl bg-gray-200 px-4 py-3 ${index === partnerEstablishments.length - 1 ? 'mr-4' : ''}`}>
                    <PartnerStablishmentLogoIcon />
                    <Text className="text-center text-xs font-semibold">
                      {partnerEstbalishment.nome}
                    </Text>
                    <Tag className="border-customOrange-300 bg-customOrange-200">
                      <Text className="px-2 py-1 text-center text-xs font-bold text-customOrange-600">
                        {formatCouponsQuantity(partnerEstbalishment.cupons_disoniveis)}
                      </Text>
                    </Tag>
                  </CustomBodyCard>
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            {/* {partnerEstablishments.map((partnerEstbalishment) => (
              <CustomBodyCard
                key={partnerEstbalishment.id}
                className="h-32 w-[24%] gap-2 rounded-xl bg-gray-200 px-4 py-3">
                <PartnerStablishmentLogoIcon />
                <Text className="text-center text-xs font-semibold">
                  {partnerEstbalishment.nome}
                </Text>
                <Tag className="border-customOrange-300 bg-customOrange-200">
                  <Text className="px-2 py-1 text-center text-xs font-bold text-customOrange-600">
                    {formatCouponsQuantity(partnerEstbalishment.cupons_disoniveis)}
                  </Text>
                </Tag>
              </CustomBodyCard>
            ))} */}
          </View>
        );
      case 'section':
        return (
          <View className="mt-4 gap-3">
            <Text className="ml-4 text-base font-bold text-neutral-900">{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(coupon) => coupon.id.toString()}
              renderItem={({ item: coupon, index }) => (
                <Coupon
                  {...coupon}
                  onPressViewCoupon={() => console.log('Pressed')}
                  isLastChild={index === item.data.length - 1}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );

      case 'recentlyViewed':
        return (
          <View className="mt-4 gap-3">
            <Text className="ml-4 text-base font-bold text-neutral-900">{item.title}</Text>
            <FlatList
              data={item.data}
              keyExtractor={(coupon) => coupon.id.toString()}
              renderItem={({ item: coupon, index }) => (
                <Coupon
                  {...coupon}
                  variant="secondary"
                  onPressViewCoupon={() => console.log('Pressed')}
                  isLastChild={index === item.data.length - 1}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={homeSections}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>

    // <FlatList className={styles.container}>
    //   {/* <Text className={styles.title}>{title}</Text>
    //   <View className={styles.separator} />
    //   <EditScreenInfo path={path} />
    //   {children} */}

    //   <Image
    //     className="ml-4 mr-4 flex h-[150px] w-[95%] items-center justify-center rounded-lg"
    //     source={require('../assets/homeBanner.png')}
    //     resizeMode="cover"
    //   />

    //   <View className="mt-4">
    //     <FlatList
    //       contentContainerStyle={{ alignItems: 'center' }}
    //       data={categories}
    //       keyExtractor={(item) => {
    //         return item.id.toString();
    //       }}
    //       numColumns={3}
    //       renderItem={(item) => {
    //         return (
    //           <SimpleCard
    //             name={CategoryEnumLabels[item.item.name as keyof typeof CategoryEnum]}
    //             icon={icon[item.item.name as keyof typeof CategoryEnum]}
    //           />
    //         );
    //       }}
    //     />
    //   </View>

    //   <View className="mt-4 h-48 gap-3">
    //     <Text className="ml-4  text-base font-bold text-neutral-900">Recomendados para você</Text>
    //     <FlatList
    //       data={couponsData}
    //       keyExtractor={(item) => {
    //         return item.id.toString();
    //       }}
    //       renderItem={(item) => (
    //         <Coupon
    //           {...item.item}
    //           onPressViewCoupon={() => console.log('Pressed')}
    //           isLastChild={item.index === couponsData.length - 1}
    //         />
    //       )}
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //     />
    //   </View>

    //   <View className="mt-4 h-48 gap-3">
    //     <Text className="ml-4  text-base font-bold text-neutral-900">Recomendados para você</Text>
    //     <FlatList
    //       data={couponsData}
    //       keyExtractor={(item) => {
    //         return item.id.toString();
    //       }}
    //       renderItem={(item) => (
    //         <Coupon
    //           {...item.item}
    //           onPressViewCoupon={() => console.log('Pressed')}
    //           isLastChild={item.index === couponsData.length - 1}
    //         />
    //       )}
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //     />
    //   </View>
    //   <View className="h-48 gap-3">
    //     <Text className="ml-4 text-base font-bold text-neutral-900">
    //       Aproveite antes que acabe!
    //     </Text>
    //     <FlatList
    //       data={couponsData}
    //       keyExtractor={(item) => item.id.toString()}
    //       renderItem={(item) => (
    //         <Coupon
    //           {...item.item}
    //           onPressViewCoupon={() => console.log('Pressed')}
    //           isLastChild={item.index === couponsData.length - 1}
    //         />
    //       )}
    //       horizontal
    //       showsHorizontalScrollIndicator={false}
    //     />
    //   </View>
    // </FlatList>
  );
};

export default Home;
