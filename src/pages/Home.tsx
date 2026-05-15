import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import type { Product } from '../types';
import { Container, Row, Col } from 'react-bootstrap';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const fetchCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data = await response.json();
  return data;
};

const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await response.json();
  return data;
};

function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const [selectedCategory, setSelectedCategory] = useState('');

  const { data: categoryProducts } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory),
    enabled: !!selectedCategory,
  });

  const displayedProducts = selectedCategory ? categoryProducts : data;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching products.</div>;

  return (
    <Container>
      <h1>Products</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories?.map((category: string) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Row>
        {displayedProducts?.map((product: Product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
