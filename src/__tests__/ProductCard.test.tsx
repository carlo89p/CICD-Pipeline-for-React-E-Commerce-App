import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import ProductCard from '../components/ProductCard';

const mockStore = configureStore({
  reducer: { cart: cartReducer },
});

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 9.99,
  description: 'A test product',
  category: 'test',
  image: 'https://via.placeholder.com/150',
  rating: { rate: 4.5, count: 100 },
};

test('renders product title', () => {
  render(
    <Provider store={mockStore}>
      <ProductCard product={mockProduct} />
    </Provider>
  );

  expect(screen.getByText('Test Product')).toBeInTheDocument();
});
