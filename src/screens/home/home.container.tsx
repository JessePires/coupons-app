import { ContainerWithProps } from '~/@common/types/container.types';
import { HomeContainerProps } from './home.types';
import { JSX, useState } from 'react';

export const HomeContainer = (props: ContainerWithProps<HomeContainerProps>): JSX.Element => {
  const [categories, setCategories] = useState<any[]>([]);
  const [partnersEstbalishments, setPartnersEstbalishments] = useState<any[]>([]);
  const [recomendedCoupons, setRecomendedCoupons] = useState<any[]>([]);
  const [aboutToExpireCoupons, setAboutToExpireCoupons] = useState<any[]>([]);

  return props.children({});
};
