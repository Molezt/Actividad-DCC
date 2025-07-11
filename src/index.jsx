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
// Este código inicializa una aplicación React, envolviendo el componente App en un proveedor de contexto para manejar el carrito de compras. Utiliza ReactDOM para renderizar la aplicación en el elemento con id 'root' del HTML. El modo estricto de React ayuda a identificar problemas potenciales en la aplicación durante el desarrollo.
