import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
// Inicialización de aplicación React, componente App envuelto en proveedor de contexto para control de compras.
// Utiliza ReactDOM para renderizar la aplicación en el elemento con id 'root' del HTML.
