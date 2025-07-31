import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Tag from './tag.component';

it('deve renderizar os filhos corretamente', () => {
  const { getByText } = render(
    <Tag>
      <Text>Promoção</Text>
    </Tag>
  );
  expect(getByText('Promoção')).toBeTruthy();
});

it('deve aplicar a classe base e a classe extra', () => {
  const { getByTestId } = render(<Tag className="bg-red-500" testID="tag" />);

  const tagView = getByTestId('tag');
  const className = tagView.props.className;

  expect(className).toContain('items-center');
  expect(className).toContain('bg-red-500');
});

it('deve repassar outras props como testID', () => {
  const { getByTestId } = render(<Tag testID="tag-test" />);
  expect(getByTestId('tag-test')).toBeTruthy();
});
