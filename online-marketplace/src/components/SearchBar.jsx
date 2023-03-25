import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Rating from "@mui/material/Rating";


function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 400,
          mb: 3,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products"
          inputProps={{ 'aria-label': 'search products' }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className="grid gap-6 grid-cols-1 mobileM:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
      {filteredProducts.map((product, idx) => (
              <div key={idx} className="flex flex-col border border-zinc-300 rounded p-3 shadow">
              <img
                src={product.image}
                alt={`Product #${idx + 1}'s image`}
                className="w-52 h-52 object-scale-down mx-auto mb-3"
              />
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
        ))}
        </div>
    </>
  );
}

export default SearchBar;
