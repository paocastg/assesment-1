import React from "react";
// import ProductList from "./ProductList";
import ProductCard from "../componentes/ProductCard";

export default function Home({ items }) {
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
}
