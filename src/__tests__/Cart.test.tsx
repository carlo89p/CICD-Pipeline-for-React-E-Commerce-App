import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import ProductCard from '../components/ProductCard';
import Cart from '../pages/Cart';
import { MemoryRouter } from 'react-router-dom';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 9.99,
  description: 'A test product',
  category: 'test',
  image: 'https://via.placeholder.com/150',
  rating: { rate: 4.5, count: 100 },
};

test('cart updates when adding a product', () => {
  const testStore = configureStore({
    reducer: { cart: cartReducer },
  });

  render(
    <Provider store={testStore}>
      <MemoryRouter>
        <ProductCard product={mockProduct} />
        <Cart />
      </MemoryRouter>
    </Provider>
  );

  fireEvent.click(screen.getByText('Add to Cart'));
  expect(screen.getByText('Items in cart: 1')).toBeInTheDocument();
});
