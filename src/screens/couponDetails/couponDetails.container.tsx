import { JSX } from 'react';
import { ContainerWithProps } from '~/@common/types/container.types';
import { CouponDetailsContainerProps } from './couponDetails.types';
import { useNavigation } from '@react-navigation/native';

export const CouponDetailsContainer = (
  props: ContainerWithProps<CouponDetailsContainerProps>
): JSX.Element => {
  const navigation = useNavigation();

  const goToConsumeCoupons = (): void => {
    navigation.navigate('ConsumeCoupon');
  };

  return props.children({
    actions: { goToConsumeCoupons },
  });
};
