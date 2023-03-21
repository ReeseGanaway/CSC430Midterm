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
        <form
          action="#"
          className="mt-8 grid md:grid-cols-[1fr,1fr,minmax(24rem,1fr)] md:gap-x-5"
        >
          <div className="order-2 mt-6 md:mt-0 md:order-1 md:col-span-2">
            <h2 className="text-lg">1. Delivery Information</h2>
            <div className="w-full mt-5 grid gap-5 mobileM:grid-cols-2">
              <TextField label="First Name" type="text" required />
              <TextField label="Last Name" type="text" required />
            </div>
            <div className="w-full mt-5 grid gap-5 mobileM:grid-cols-2">
              <TextField label="Email" type="email" required />
              <TextField label="Phone Number" type="tel" required />
            </div>
            <div className="w-full mt-5 grid gap-5 mobileM:grid-cols-2 md:grid-cols-1">
              <TextField label="Street Address" type="text" required />
              <TextField label="Apt, suite, etc (optional)" type="text" />
            </div>
            <div className="w-full mt-5 grid gap-5 grid-cols-5 mobileXl:grid-cols-4 md:grid-cols-5">
              <TextField
                label="City"
                type="text"
                className="col-span-5 mobileXl:col-span-2 md:col-span-5 lg:col-span-2"
                required
              />
              <TextField
                select
                label="State"
                className="col-span-3 mobileXl:col-span-1 md:col-span-3 lg:col-span-2"
                required
                defaultValue=""
              >
                {states.map((state, idx) => (
                  <MenuItem key={idx} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="ZIP Code"
                type="number"
                className="col-span-2 mobileXl:col-span-1 md:col-span-2 lg:col-span-1"
                required
              />
            </div>
          </div>
          <div className="border border-slate-200 rounded max-w-sm h-max shadow-[0_0_5px_rgba(0,0,0,0.2)] justify-self-center md:justify-self-end order-1 md:order-2 md:min-w-[24rem]">
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
              <div className="flex justify-between mb-4">
                <p>Estimated tax to be collected:</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $6.47
                </span>
              </div>
            </div>
            <div className="m-4 flex justify-between items-center">
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
          <div className="order-3 mt-6 col-span-full">
            <h2 className="text-lg">2. Payment Method</h2>
            <div className="mt-2 flex flex-col">
              <div className="flex flex-col mobileM:flex-row justify-center">
                <button className="border border-slate-300 rounded h-fit px-4 mobileM:mr-8">
                  <img
                    src="/google_pay.svg"
                    alt="Google Pay button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
                <button className="border border-slate-300 rounded h-fit px-4 mt-4 mobileM:mr-8 mobileM:mt-0">
                  <img
                    src="/apple_pay.svg"
                    alt="Apple Pay button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
                <button className="border border-slate-300 rounded h-fit px-4 mt-4 mobileM:mt-0">
                  <img
                    src="/paypal.svg"
                    alt="PayPal button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
              </div>
              <div className="flex items-center mt-6">
                <span className="hidden mobileS:block flex-[1] h-[2px] bg-zinc-500 mr-2" />
                <p className="text-zinc-500 font-medium mx-auto">
                  Or pay with different method
                </p>
                <span className="hidden mobileS:block flex-1 h-[2px] bg-zinc-500 ml-2" />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
