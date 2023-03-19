import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Checkout = () => {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <div className="flex flex-col min-h-screen p-6">
      <main>
        <small className="flex items-center text-sky-700 text-base font-semibold">
          <FaAngleLeft className="mr-1 stroke-2" />
          Return to cart
        </small>
        <h1 className="text-3xl font-bold mt-2 tracking-wide">Checkout</h1>
        <form action="" className="mt-6">
          <h2 className="text-lg">1. Delivery Information</h2>
          <div className="border border-slate-200 rounded max-w-md shadow-[0_0_5px_rgba(0,0,0,0.2)]">
            <h2 className="text-lg font-semibold p-3 border-b">
              Order Summary
            </h2>
            <div className="m-3 flex flex-col border-b-4 border-gray-600">
              <div className="flex justify-between mb-2">
                <p>Items (2):</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $145.99
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <p>Shipping &#38; handling:</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $7.50
                </span>
              </div>
              <div className="flex items-center justify-end">
                <span className="border-b-2 border-gray-400 w-16" />
              </div>
              <div className="flex justify-between mt-4 mb-2">
                <p>Total before tax:</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $145.99
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <p>Estimated tax to be collected:</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $6.47
                </span>
              </div>
            </div>
            <div className="m-4 flex justify-between">
              <p className="text-red-600 text-lg font-semibold">Order Total:</p>
              <span className="pl-[1.75rem] items-end inline-flex text-red-600 text-lg font-semibold">
                $152.46
              </span>
            </div>
            <div className="m-3">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3a577c] to-[#275350] rounded w-full py-2 text-white font-medium"
              >
                Place your order
              </button>
              <p className="text-zinc-500 py-2">
                By placing your order, you agree to our{" "}
                <a href="#" className="text-blue-600">
                  privacy notice
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600">
                  conditions of use
                </a>
                .
              </p>
            </div>
          </div>
          <div className="w-full mt-5 grid gap-5 grid-cols-2">
            <TextField label="First Name" type="text" required />
            <TextField label="Last Name" type="text" required />
          </div>
          <div className="w-full mt-5 grid gap-5 grid-cols-2">
            <TextField label="Email" type="email" required />
            <TextField label="Phone Number" type="tel" required />
          </div>
          <div className="w-full mt-5 grid gap-5 grid-cols-2">
            <TextField label="Street Address" type="text" required />
            <TextField label="Apt, suite, etc (optional)" type="text" />
          </div>
          <div className="w-full mt-5 grid gap-5 grid-cols-4">
            <TextField
              label="City"
              type="text"
              className="col-span-2"
              required
            />
            <TextField select label="Select">
              {states.map((state, idx) => (
                <MenuItem key={idx} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="ZIP" type="number" required />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
