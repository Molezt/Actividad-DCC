import React, { useEffect } from "react";
import offers from "../data/offers";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.css";

const Offers = () => {
  useEffect(() => {
    document.title = "Ofertas | Tienda de Vinilos DCC";
  }, []);

  return (
    <section>
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
        Ofertas especiales
      </h2>
      <section className="product-list">
        {offers.length > 0 ? (
          offers.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No hay productos en oferta ahora.
          </p>
        )}
      </section>
    </section>
  );
};

export default Offers;
// Este componente Offers muestra una lista de productos en oferta utilizando el componente ProductItem.
