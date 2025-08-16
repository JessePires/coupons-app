import { ContainerWithProps } from '~/@common/types/container.types';

import { JSX, useEffect, useState } from 'react';
import { CategoryDTO } from '~/domain/categories/categories.dto';
import { CouponsContainerProps } from './coupons.types';
import { CategoriesController } from '~/domain/categories/categories.controller';
import { CouponsController } from '~/domain/coupon/coupon.controller';
import { useNavigation } from '@react-navigation/native';

export const CouponsContainer = (props: ContainerWithProps<CouponsContainerProps>): JSX.Element => {
  const categoriesController = new CategoriesController();
  const couponsController = new CouponsController();

  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryDTO>();

  const navigation = useNavigation();

  const getCategories = async (): Promise<void> => {
    try {
      const response = await categoriesController.getAll();

      if (response.data.data) {
        setSelectedCategory(response.data.data[0]);
      }

      setCategories(response.data.data);
    } catch (error) {
      console.error('ERROR WHILE GETTING CATEGORIES', error);
    }
  };

  const onPressCategory = (category: CategoryDTO): void => {
    setSelectedCategory(category);
  };

  const getCoupons = async () => {
    try {
      if (selectedCategory) {
        const response = await couponsController.getByCategory(selectedCategory.id);

        setCoupons(response);
      }
    } catch (error) {
      console.error('ERROR WHILE GETTING COUPONS', error);
    }
  };

  const handlePressSeeCouponDetails = () => {
    navigation.navigate('CouponDetail');
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getCoupons();
  }, [selectedCategory]);

  return props.children({
    categories,
    selectedCategory,
    coupons,
    actions: { onPressCategory, handlePressSeeCouponDetails },
  });
};
