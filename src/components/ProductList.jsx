import React from "react";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

const ProductList = ({ filtered = [] }) => {
  return (
    <section className="product-list">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>No se encontraron resultados.</p>
      )}
    </section>
  );
};

export default ProductList;

// Este componente ProductList renderiza una lista de productos utilizando el componente ProductItem.
