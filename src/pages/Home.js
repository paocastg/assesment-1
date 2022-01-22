import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ items }) => {
  return (
    <div className="hero">
      <div class="text-center">
        <div class="col-12 p-5 row">
          {items &&
            items.map((item) => {
              return <ProductCard {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
