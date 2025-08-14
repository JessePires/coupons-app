import { JSX } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Containers from './coupons.container';
import { CouponsContainerProps } from './coupons.types';
import { CategoryDTO } from '~/domain/categories/categories.dto';
import Tag from '~/components/tag/tag.component';
import { CategoryEnum, CategoryEnumLabels } from '~/utils/enums/category.enum';
import Coupon from '~/components/coupon/coupon.component';
import CustomTextInput from '~/components/textInput/textInput.component';

const CouponsScreen = (): JSX.Element => {
  const renderCategory = (
    category: CategoryDTO,
    isLastChild: boolean,
    isFirstChild: boolean,
    isSelected: boolean,
    onPressCategory: (category: CategoryDTO) => void
  ): JSX.Element => {
    return (
      <TouchableOpacity
        className={`${isFirstChild ? 'ml-4' : 'ml-2'} ${isLastChild ? 'mr-4' : ''} w-fit`}
        onPress={() => onPressCategory(category)}>
        <Tag
          className={`${isSelected ? 'border-customOrange-300 bg-customOrange-200' : 'border-neutral-300'} px-4 py-1`}>
          <Text
            className={`${isSelected ? 'font-bold text-customOrange-600' : 'font-normal text-neutral-500'} text-sm`}>
            {CategoryEnumLabels[category.name as keyof typeof CategoryEnum]}
          </Text>
        </Tag>
      </TouchableOpacity>
    );
  };

  return (
    <Containers.CouponsContainer>
      {(containerProps: CouponsContainerProps) => {
        console.log('container', containerProps);
        return (
          <View className="mt-6">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={containerProps.categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => {
                const isLastChild = index === containerProps.categories.length - 1;
                const isSelected = item.id === containerProps.selectedCategory?.id;

                return renderCategory(
                  item,
                  isLastChild,
                  index === 0,
                  isSelected,
                  containerProps.actions.onPressCategory
                );
              }}
            />

            <CustomTextInput />

            <FlatList
              data={containerProps.coupons}
              keyExtractor={(coupon) => coupon.id.toString()}
              renderItem={({ item: coupon, index }) => (
                <Coupon
                  variant="secondary"
                  {...coupon}
                  onPressViewCoupon={() => console.log('Pressed')}
                  isLastChild={index === containerProps.coupons.length - 1}
                />
              )}
            />
          </View>
        );
      }}
    </Containers.CouponsContainer>
  );
};

export default CouponsScreen;
