function ProductCard(props) {

  
    return (
        <div class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={props.imgSrc} alt={props.imgAlt} class="h-full w-full object-cover object-center lg:h-full lg:w-full object-scale-down"/>
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {props.name}
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">{props.cost}</p>
          </div>
        </div>
      );
  }

export default ProductCard;

