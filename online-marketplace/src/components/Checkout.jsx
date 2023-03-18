import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <main>
        <small className="flex items-center text-sky-700 text-base font-semibold">
          <FaAngleLeft className="mr-1 stroke-2" />
          Return to cart
        </small>
        <h1 className="text-3xl font-bold mt-2 tracking-wide">Checkout</h1>
        <form action="" className="mt-6">
          <h2 className="text-lg">1. Contact Information</h2>
          <div className="w-full mt-5 flex gap-4">
            <TextField
              label="First Name"
              required
              className="flex-grow"
            />
            <TextField
              label="Last Name"
              required
              className="flex-grow"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
