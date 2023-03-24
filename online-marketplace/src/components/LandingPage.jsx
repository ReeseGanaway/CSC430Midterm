import Drawer from "./Sidebar";

function LandingPage() {
  return (
    <div>
      <Drawer />

      <div class="p-4 sm:ml-64">
        <div class="100">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 class="text-2xl font-bold text-gray-900">Categories</h2>

              <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt="Front of men&#039;s Basic Tee in black."
                      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="/productlist">
                      <span class="absolute inset-0"></span>
                      Shirts
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">Shirts</p>
                </div>

                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="/images/jeans1.jpg"
                      alt="Levi jeans"
                      class="h-full w-full object-cover object-center object-scale-down "
                    />
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <a href="/productlist">
                      <span class="absolute inset-0"></span>
                      Pants
                    </a>
                  </h3>
                  <p class="text-base font-semibold text-gray-900">Pants</p>
                </div>

                <div class="group relative">
                  <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="/images/jordans1.jpg"
                      alt="Nike Men's Footbal Shoes"
                      class="h-full w-full object-cover object-center object-scale-down"
                    />
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
      </div>
    </div>
  );
}

export default LandingPage;
