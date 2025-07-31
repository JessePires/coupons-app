import { render, fireEvent } from '@testing-library/react-native';
import Coupon from './coupon.component';
import { customFormatDate } from '~/utils/date.utils';

describe('Coupon', () => {
  const mockProps = {
    titulo: 'Desconto em Pizza',
    descricao: '50% de desconto na Pizza Grande',
    categoria: 'Alimentação',
    validade: '2025-08-01',
    onPressViewCoupon: jest.fn(),
  };

  it('deve renderizar os dados do cupom corretamente', () => {
    const { getByTestId, getByText } = render(<Coupon {...mockProps} />);
    expect(getByTestId('couponTitle').props.children).toBe(mockProps.titulo);
    expect(getByTestId('couponDescription').props.children).toBe(mockProps.descricao);
    expect(getByTestId('couponCategory').props.children).toBe(mockProps.categoria);
    expect(getByTestId('couponValidity').props.children).toContain(
      customFormatDate(mockProps.validade)
    );
  });

  it('deve chamar a função onPressViewCoupon ao clicar no botão "Ver Cupom"', () => {
    const { getByTestId } = render(<Coupon {...mockProps} />);
    const button = getByTestId('couponOnPress');
    fireEvent.press(button);
    expect(mockProps.onPressViewCoupon).toHaveBeenCalledTimes(1);
  });
});
