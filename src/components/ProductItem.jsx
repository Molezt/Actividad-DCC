import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  const { cart, addItem } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;
  const isAtLimit = quantityInCart >= product.stock;

  const isOffer =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="product-item">
      {isOffer && <div className="product-item__ribbon">¡Oferta!</div>}
      <img
        className="product-item__image"
        src={product.image}
        alt={product.title}
      />
      <h3 className="product-item__title">{product.title}</h3>
      <p className="product-item__artist">{product.artist}</p>
      <p className="product-item__genre">Género: {product.genre}</p>

      <p className="product-item__stock">
        Stock disponible: {product.stock - quantityInCart}
      </p>

      {isOffer ? (
        <p className="product-item__price">
          <span className="product-item__price--original">
            ${product.originalPrice}
          </span>{" "}
          <span className="product-item__price--discount">
            ${product.price}
          </span>
        </p>
      ) : (
        <p className="product-item__price">${product.price}</p>
      )}

      <Link className="product-item__link" to={`/product/${product.id}`}>
        Ver más
      </Link>

      <div className="product-item__actions">
        <button
          className="product-item__button"
          onClick={() => addItem(product)}
          disabled={isAtLimit}
        >
          {isAtLimit ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

// Este componente ProductItem muestra un producto individual con su imagen, título, artista y precio.
