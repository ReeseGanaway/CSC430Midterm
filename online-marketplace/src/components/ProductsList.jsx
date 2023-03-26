import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, resetProducts, fetchProducts } from '../redux/slices/productsSlice';

  
const ProductsList = () => {
  // const [products, setProducts] = useState([]);

  const products = useSelector(state => state.products.items);

  const dispatch = useDispatch();

  const fetchProductStatus = useSelector(state => state.products.status)

  // const fetchProducts = async () => {
  //   const productsList = await axios.get("https://fakestoreapi.com/products");
  //   setProducts(productsList.data);
  // };

  useEffect(() => {
    console.log('here')
    if (fetchProductStatus === 'idle'){
        dispatch(fetchProducts())
    }
  }, [fetchProductStatus, dispatch])

  return (
    <div className="grid gap-6 grid-cols-1 mobileM:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
      {products.map((product, idx) => {
        return (
          <div key={idx} className="flex flex-col border border-zinc-300 rounded p-3 shadow">
            <img
              src={product.image}
              alt={`Product #${idx + 1}'s image`}
              className="w-52 h-52 object-scale-down mx-auto mb-3"
            />
            {console.log(product)}
            <h1 className="font-semibold mb-2">{product.title}</h1>
            <p className="flex mb-2">
              <span className="text-sm">$</span>
              <span className="text-2xl pl-[2px]">
                {product.price.toFixed(2)}
              </span>
            </p>
            <p className="flex items-center">
              <span className="pr-1">{product.rating.rate}</span>
              <Rating
                name="read-only"
                value={product.rating.rate}
                precision={0.1}
                size="small"
                readOnly
              />
              <span className="pl-1">({product.rating.count})</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
