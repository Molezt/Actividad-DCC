import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();

  useEffect(() => {
    document.title = "Carrito | Tienda de Vinilos DCC";
  }, []);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className="cart">
      <h2 className="cart__title">Carrito</h2>

      {cart.length === 0 ? (
        <p className="cart__empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <p>
            Aquí están visualizados los productos que has añadido para comprar.
          </p>

          <ul className="cart__list">
            {cart.map((product) => (
              <li key={product.id} className="cart__item">
                <strong>{product.title}</strong> — {product.quantity} unidad
                {product.quantity > 1 ? "es" : ""} × ${product.price} ={" "}
                <strong>${product.price * product.quantity}</strong>
                <button
                  className="cart__button"
                  onClick={() => removeItem(product)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <p className="cart__total">
            Total ({cart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
            artículos): ${total}
          </p>

          <button
            className="cart__button cart__clear-button"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>

          <button
            className="cart__button cart__pay-button"
            onClick={() => alert("Método de pago aún no disponible.")}
          >
            Pagar
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;

// Componente para ruta Carrito la cual muestra los productos añadidos al carrito.
// También permite eliminarlos o vaciar el carrito completamente.
