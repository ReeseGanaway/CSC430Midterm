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
            <TextField label="City" type="text" className="col-span-2" required />
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
