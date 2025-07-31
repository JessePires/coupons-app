import { FlatList, View } from 'react-native';
import Coupon from './coupon/coupon.component';

// import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

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

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      {/* <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children} */}
      <FlatList
        className="pt-8"
        data={couponsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => {
          return <Coupon {...item.item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
