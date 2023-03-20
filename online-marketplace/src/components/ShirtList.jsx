import ProductCard from "./ProductCard";

function ShirtList(props) {

  
    return (
      
       
<div class="p-4 sm:ml-0">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {props.setProduct("")}}>Back</button>
        

  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ProductCard imgSrc = "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" imgAlt = "Basic Tee" name = "Basic Tee" cost = "$20"/>
      </div>
    </div>
  </div> 
  </div>
 
      );
  }
  
  export default ShirtList;