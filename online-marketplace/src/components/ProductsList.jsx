import { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productsList = await axios.get("https://fakestoreapi.com/products");
    setProducts(productsList.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
      {products.map((product, idx) => {
        return (
          <div key={idx} className="flex flex-col bg-slate-300">
            <img
              src={product.image}
              alt={`Product #${idx + 1}'s image`}
              className="w-52 h-auto mx-auto mt-3"
            />
            {console.log(product)}
            <h1>{product.title}</h1>
            <p>${product.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
