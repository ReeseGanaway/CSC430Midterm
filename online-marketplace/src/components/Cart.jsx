import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../redux/slices/cartSlice";

function Cart() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);


    const getSubTotal = () => {
        let subtotal = 0;
        for(let i = 0; i < cart.length; i++){
            subtotal += cart[i].price * cart[i].quantity;
        }
        return subtotal;
    }
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="w-fit">
                {cart.map((product, id) => (
                    <div
                        key={id}
                        className="grid border border-zinc-300 rounded p-3 shadow"
                    >
                        <img
                            src={product.image}
                            alt={`Product #${id + 1}'s image`}
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
                        <p className="flex mb-2">
                            Quantity : {product.quantity}
                        </p>
                    </div> ))}
            </div>
            <div className="w-fit">          
                <div className="border border-zinc-300 rounded max-w-sm h-max shadow-[0_0_5px_rgba(0,0,0,0.2)] justify-self-center md:justify-self-end order-1 md:order-2 md:min-w-[24rem] mb-10">
                    <h2 className="text-lg font-semibold p-3 border-b">
                    Subtotal ({cart.length} items): ${getSubTotal()}
                    </h2>
                    <div className="m-3 text-center">
                        {cart.length > 0 ? (<button
                            onClick = {()=>{navigate(user.email ? '/checkout' : '/login')}}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                            disabled = {cart.length===0}
                        >
                            Proceed To Checkout
                        </button>) : 
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                            No items in cart
                        </button>}
                    </div>
                </div>
                <div className="border border-zinc-300 rounded max-w-sm h-max shadow-[0_0_5px_rgba(0,0,0,0.2)] justify-self-center md:justify-self-end order-1 md:order-2 md:min-w-[24rem] flex flex-col items-center">
                    <div className="m-3 text-center">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick= {() => {dispatch(emptyCart())}}
                        >
                            Empty Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>

);
}

export default Cart;