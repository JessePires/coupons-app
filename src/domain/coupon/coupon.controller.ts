import { CouponService } from './coupon.service';
import { CouponControllerProps } from './coupon.types';

export class CouponsController implements CouponControllerProps {
  service = new CouponService();

  async getAll(): Promise<any[]> {
    return await this.service.getAll();
  }

  async getByCategory(categoryId: number): Promise<any[]> {
    return await this.service.getByCategory(categoryId);
  }

  async getById(id: number): Promise<any> {
    return await this.service.getById(id);
  }
}
