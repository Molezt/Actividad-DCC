import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../images/logo.png";
import { FaHome, FaTags, FaShoppingCart, FaUndo } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.length;

  return (
    <header className="header">
      <div className="header__branding">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Logo VinylShop" className="header__logo-img" />
        </Link>
        <span className="header__logo-text">
          Tienda online - Daniel Campos Castañeda
        </span>
      </div>
      <nav className="header__nav">
        <Link className="header__link" to="/">
          <FaHome className="header__icon" />
          Inicio
        </Link>
        <Link className="header__link" to="/offers">
          <FaTags className="header__icon" />
          Ofertas
        </Link>
        <Link className="header__link" to="/cart">
          <FaShoppingCart className="header__icon" />
          Carrito
          {totalItems > 0 && (
            <span className="header__badge">{totalItems}</span>
          )}
        </Link>
        <Link className="header__link" to="/returns">
          <FaUndo className="header__icon" />
          Devoluciones
        </Link>
      </nav>
    </header>
  );
};

export default Header;

// Este componente de encabezado muestra el logo, nombre y enlaces a las rutas principales.
