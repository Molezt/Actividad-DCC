import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Busca tu disco por título, artista o género..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

// Componente de barra de busqueda que permite a los usuarios buscar vinilos disponibles.
