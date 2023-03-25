import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 400,
          mb: 3,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products"
          inputProps={{ "aria-label": "search products" }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <div className="grid gap-6 grid-cols-1 mobileM:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-zinc-300 rounded p-3 shadow"
          >
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
            <button className="btn" onClick={() => handleProductClick(product)}>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  View Product
                </span>
                <span className="relative invisible">View Product</span>
              </a>
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          open={Boolean(selectedProduct)}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex items-center justify-center h-screen">
            <div className="bg-white w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] p-5 rounded shadow-lg">
              <div className="flex justify-between items-center pb-3 border-b-2">
                <h1 className="text-lg font-bold">{selectedProduct.title}</h1>
                <button onClick={handleCloseModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9.172l3.536-3.536a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L12.12 10l3.536 3.536a1 1 0 01-1.414 1.414L10 11.88l-3.536 3.536a1 1 0 01-1.414-1.414L7.88 10 4.344 6.464a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 9.172z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between pt-3">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-52 h-52 object-scale-down mr-5"
                />
                <div>
                  <p className="text-gray-700 font-semibold mb-2">
                  <strong>Price: </strong>
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700 mb-2">
                  <strong>Description: </strong> 
                    {selectedProduct.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-gray-700 font-semibold pr-2">
                      Rating:
                    </span>
                    <Rating
                      name="read-only"
                      value={selectedProduct.rating.rate}
                      precision={0.1}
                      size="small"
                      readOnly
                    />
                    <span className="pl-1">
                      ({selectedProduct.rating.count})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
export default SearchBar;
