import { CategoryDTO } from '~/domain/categories/categories.dto';

export interface CouponsContainerProps {
  categories: CategoryDTO[];
  selectedCategory?: CategoryDTO;
  coupons: any[];
  actions: {
    onPressCategory: (category: CategoryDTO) => void;
    handlePressSeeCouponDetails: (id: number) => void;
  };
}
