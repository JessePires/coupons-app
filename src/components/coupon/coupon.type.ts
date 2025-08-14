export interface CouponProps {
  titulo: string;
  descricao: string;
  categoria: string;
  validade: string;
  isLastChild?: boolean;
  onPressViewCoupon: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}
