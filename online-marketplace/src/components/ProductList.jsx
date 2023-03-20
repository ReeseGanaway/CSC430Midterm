import Sidebar from "./SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import ShirtList from "./ShirtList";
import PantsList from "./PantsList";
import Drawer from "./Drawer";


function ProductList() {

    const [product, setProduct] = useState("");
    const [categories, setCategories] = useState([])

    useEffect(() => {
      setCategories(fetch('https://fakestoreapi.com/products/categories')
              .then(res=>res.json())
              .then(json=>console.log(json)))
        console.log(categories)
    }, [])

    useEffect(() => {
        console.log(categories);
      }, [product]);

    function displayProducts(){
        switch(product){
            case "" : console.log('here');return (<div class="p-4 sm:ml-64">
            <div class="100">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 class="text-2xl font-bold text-gray-900">Categories</h2>
        
              <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full object-scale-down"/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <button onClick={()=> setProduct("shirts")}>
                      <span class="absolute inset-0"></span>
                      Shirts
                    </button>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">Shirts</p>
                </div>
        
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="/images/jeans1.jpg" alt="Levi jeans" class="h-full w-full object-cover object-center object-scale-down "/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                  <button onClick={()=> setProduct("pants")}>                      <span class="absolute inset-0"></span>
                      Pants
                    </button>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">Pants</p>
                </div>
        
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="/images/jordans1.jpg" alt="Nike Men's Footbal Shoes" class="h-full w-full object-cover object-center object-scale-down"/>
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Shoes
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">Shoes</p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>)
            case 'shirts':
                return <ShirtList product = {product} setProduct = {setProduct}></ShirtList>
            case 'pants':
                return <PantsList product = {product} setProduct = {setProduct}></PantsList>
            default: 
                return null
        }
    }


  return (
    <div>

  <Drawer/>

  {displayProducts()}

  

  {/* <div class="p-4 sm:ml-64">
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Basic Tee
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p class="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>
  

      </div>
    </div>
  </div> 
  </div> */}
</div>



  
    );
}

export default ProductList;
