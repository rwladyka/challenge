import { useEffect, useState } from 'react';
import { Product } from '../../types';
import ProductCard from '../../components/ProductCard';
import { ProductCardList } from './Home.styled';
import Loading from '../../components/BasicComponents/Loading';

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    async function getProducts() {
      const t = await fetch('/api/products');
      const json = await t.json();

      setProducts(json);
    }
    
    fetch('/order/init')
    getProducts();
  }, []);

  if (!products) return <Loading />;
  if (!products.length) return null;

  return (
    <ProductCardList>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ProductCardList>
  );
};

export default Home;
