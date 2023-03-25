import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async () => {
    const productsList = await axios.get("https://fakestoreapi.com/products");
    setProducts(productsList.data);
    setFilteredProducts(productsList.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(newFilteredProducts);
  }, [searchQuery, products]);

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      <div className="grid gap-6 grid-cols-1 mobileM:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
        
      </div>
    </div>
  );
};

export default ProductsList;
