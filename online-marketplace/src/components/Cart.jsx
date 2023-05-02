import { Fragment } from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

function Cart() {

    const cart = useSelector(state => state.cart);
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                {cart.map((product, idx) => (
                    <div
                        key={idx}
                        className="grid border border-zinc-300 rounded p-3 shadow"
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
                    </div> ))}
            </div>
            <div>2</div>

        </div>

);
}

export default Cart;