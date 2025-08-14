export class CouponService {
  private servicePrefix = process.env.COUPONS_URL;

  private couponsData = [
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

  async getAll(): Promise<any[]> {
    return this.couponsData;
  }

  async getByCategory(categoryId: number): Promise<any[]> {
    console.log('categoryId', categoryId);
    return this.couponsData;
  }

  async getById(id: number): Promise<any> {
    return this.couponsData.find((coupon) => coupon.id === id);
  }
}
