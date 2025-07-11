import React, { useEffect, useState } from "react";
import products from "../data/products";
import useFilteredProducts from "../hooks/useFilteredProducts";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = useFilteredProducts(products, searchTerm);

  useEffect(() => {
    document.title = "Inicio | Tienda de Vinilos DCC";
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Bienvenido a Tienda de Vinilos DCC</h2>
      <p>Colección selecta y exclusiva de discos en formato vinilo.</p>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
        Vinilos disponibles
      </h3>

      <ProductList filtered={filteredProducts} />
    </section>
  );
};

export default Home;
// Este componente Home muestra una lista de vinilos disponibles y permite buscar entre ellos.
