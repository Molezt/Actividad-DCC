import { useMemo } from "react";

const useFilteredProducts = (products, searchTerm) => {
  const filtered = useMemo(() => {
    if (!searchTerm) return products;

    const lower = searchTerm.toLowerCase();

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lower) ||
        product.artist.toLowerCase().includes(lower) ||
        (product.genre && product.genre.toLowerCase().includes(lower))
    );
  }, [products, searchTerm]);

  return filtered;
};

export default useFilteredProducts;

// Custom hook personalizado para filtrar en lista de productos según un término de búsqueda.
