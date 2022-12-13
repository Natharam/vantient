import { act, configure, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ProductDetail from '../pages/ProductDetail';
import products from '../data.json';
import userEvent from '@testing-library/user-event';

const renderProductDetailPage = () => {
  return render(
    <Provider store={store}>
      <ProductDetail />
    </Provider>
  );
};

describe('<ProductDetail />', () => {
  describe('Teasing product detail page', () => {
    beforeEach(async () => {
      act(() => {
        renderProductDetailPage();
      });
    });

    configure({ asyncUtilTimeout: 6000 });

    test('render product card detail with product', async () => {
      expect(await screen.findByText(products.products[0].title)).toBeInTheDocument();
    });

    test('render product card detail with product', async () => {
      expect(await screen.findByText(products.products[0].secondaryTag[0])).toBeInTheDocument();
    });

    test('render product card detail with product', async () => {
      expect(await screen.findByText(products.products[0].created_at)).toBeInTheDocument();
    });

    test('render button', async () => {
      const button = await screen.findByRole('button');
      expect(button).toBeInTheDocument();
    });

    test('render image', async () => {
      const image = await screen.findByRole('img');
      expect(image).toBeInTheDocument();
    });
  });
});
