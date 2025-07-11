import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { cart, addItem } = useCart();

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Tienda de Vinilos DCC`;
    }
  }, [product]);

  if (!product) {
    return <p className="product-detail">Producto no encontrado.</p>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;
  const isAtLimit = quantityInCart >= product.stock;

  return (
    <section className="product-detail">
      <h2 className="product-detail__title">{product.title}</h2>
      <h4 className="product-detail__artist">{product.artist}</h4>

      <img
        className="product-detail__image"
        src={product.image}
        alt={product.title}
      />

      <p className="product-detail__description">{product.description}</p>

      <p className="product-detail__price">
        {product.originalPrice && product.originalPrice > product.price ? (
          <>
            <span className="product-detail__price--original">
              ${product.originalPrice}
            </span>{" "}
            <span className="product-detail__price--discount">
              ${product.price}
            </span>
          </>
        ) : (
          <>${product.price}</>
        )}
      </p>

      <p className="product-detail__stock">
        Stock disponible: {product.stock - quantityInCart}
      </p>

      <button
        className="product-detail__button"
        onClick={() => addItem(product)}
        disabled={isAtLimit}
      >
        {isAtLimit ? "Sin stock" : "Agregar al carrito"}
      </button>
    </section>
  );
};

export default ProductDetail;

// Este componente ProductDetail muestra los detalles de un producto específico.
