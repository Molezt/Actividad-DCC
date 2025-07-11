import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Returns from "./pages/Returns";
import Offers from "./pages/Offers";
import ProductDetail from "./pages/ProductDetail";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="page-background"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// Aplicación React que utiliza React Router para navegación a diferentes páginas.
