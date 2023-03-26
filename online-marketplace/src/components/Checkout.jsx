import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CheckoutImg from "../assets/checkout_desk.jpeg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import GooglePayImg from "../assets/google_pay.svg";
import ApplePayImg from "../assets/apple_pay.svg";
import PayPalImg from "../assets/paypal.svg";

const Checkout = () => {
  const [showCardNum, setShowCardNum] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const toggleShowCardNum = () => setShowCardNum((show) => !show);
  const toggleShowCVV = () => setShowCVV((show) => !show);

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
    <div className="flex flex-col min-h-screen">
      <main>
        <small className="flex items-center text-sky-700 text-base font-semibold">
          <FaAngleLeft className="mr-1 stroke-2" />
          Return to cart
        </small>
        <h1 className="text-3xl font-bold mt-2 tracking-wide">Checkout</h1>
        <form
          action="#"
          autoComplete="off"
          className="mt-8 grid md:grid-cols-[1fr,1fr,minmax(24rem,1fr)] md:gap-x-5"
        >
          <div className="order-2 mt-6 md:mt-0 md:order-1 md:col-span-2">
            <h2 className="text-lg leading-5">1. Delivery Information</h2>
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
          <div className="border border-zinc-300 rounded max-w-sm h-max shadow-[0_0_5px_rgba(0,0,0,0.2)] justify-self-center md:justify-self-end order-1 md:order-2 md:min-w-[24rem]">
            <h2 className="text-lg font-semibold p-3 border-b">
              Order Summary
            </h2>
            <div className="m-3 flex flex-col border-b-4 border-gray-600">
              <div className="flex justify-between mb-2">
                <p>Items:</p>
                <span className="pl-[1.75rem] items-end inline-flex">
                  $145.99
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <p>Shipping &amp; handling:</p>
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
                $159.96
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
          <div className="order-3 mt-8 col-span-full">
            <h2 className="text-lg">2. Payment Method</h2>
            <div className="mt-4 flex flex-col">
              <div className="flex flex-col mobileM:flex-row justify-center">
                <button className="border border-slate-300 rounded h-fit px-4 mobileM:mr-8">
                  <img
                    src={GooglePayImg}
                    alt="Google Pay button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
                <button className="border border-slate-300 rounded h-fit px-4 mt-4 mobileM:mr-8 mobileM:mt-0">
                  <img
                    src={ApplePayImg}
                    alt="Apple Pay button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
                <button className="border border-slate-300 rounded h-fit px-4 mt-4 mobileM:mt-0">
                  <img
                    src={PayPalImg}
                    alt="PayPal button"
                    className="w-16 h-12 m-auto"
                  />
                </button>
              </div>
              <div className="flex items-center mt-4">
                <span className="hidden mobileS:block flex-[1] h-[2px] bg-zinc-500 mr-2" />
                <p className="text-zinc-500 font-medium mx-auto">
                  Or pay with different method
                </p>
                <span className="hidden mobileS:block flex-1 h-[2px] bg-zinc-500 ml-2" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 mobileM:grid-cols-6 md:grid-cols-4 gap-6">
              <TextField
                label="Cardholder Name"
                type="text"
                className="col-span-4 mobileM:col-span-6 md:col-span-2 lg:col-span-1"
                required
              />
              <FormControl className="col-span-4 mobileM:col-span-6 md:col-span-2 lg:col-span-1">
                <InputLabel>Card Number</InputLabel>
                <OutlinedInput
                  className="select-none"
                  type={showCardNum ? "number" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle card number visibility"
                        onClick={toggleShowCardNum}
                        edge="end"
                      >
                        {showCardNum ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Card Number"
                  placeholder="1234 1234 1234 1234"
                />
              </FormControl>
              <TextField
                label="Expiration Date"
                type="text"
                placeholder="MM/YY"
                className="col-span-4 mobileM:col-span-3 md:col-span-2 lg:col-span-1"
                required
              />
              <FormControl className="col-span-4 mobileM:col-span-3 md:col-span-2 lg:col-span-1">
                <InputLabel>CVV</InputLabel>
                <OutlinedInput
                  className="select-none"
                  type={showCVV ? "number" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle cvv visibility"
                        onClick={toggleShowCVV}
                        edge="end"
                      >
                        {showCVV ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="CVV"
                  placeholder="123"
                />
              </FormControl>
            </div>
          </div>
          <div className="order-4 mt-8 col-span-full">
            <h2 className="text-lg">3. Review Items &amp; Shipping</h2>
            <div className="mt-4 rounded border border-zinc-300 flex flex-col mobileL:flex-row p-2">
              <div className="my-3 mobileL:my-0 flex justify-center">
                <img
                  className="checkoutImg"
                  src={CheckoutImg}
                  alt="Picture of a computer desk"
                />
              </div>
              <div className="py-2 w-full mobileL:pl-2 mobileL:py-0">
                <h1 className="font-semibold mb-1">
                  Dicunoy Computer Desk with 2 Drawers, 46" Solid Bamboo Home
                  Office Writing Desk for Small Spaces, Compact Simple Style
                  Tables with Gap Design and Hook for PC, Laptop, Students,
                  Study, Makeup, Bedroom
                </h1>
                <p className="flex items-center mb-1">
                  <span className="text-sm text-gray-600 line-through">
                    $158.99
                  </span>
                  <span className="font-semibold ml-1 text-red-600">
                    $145.99
                  </span>
                </p>
                <p className="mb-1">Quantity: 1</p>
                <p className="mb-4">Sold by Dicunoy</p>
                <FormControl>
                  <h2 className="font-medium">Choose a delivery option:</h2>
                  <RadioGroup defaultValue="fast-delivery">
                    <div className="flex items-center">
                      <Radio
                        size="small"
                        value="fast-delivery"
                        className="!py-1 !pl-0 !pr-2"
                      />
                      <h2>
                        One-Day Delivery ($7.50){" "}
                        <span className="text-green-800">
                          &#8212; get it Tomorrow, March 24!
                        </span>
                      </h2>
                    </div>
                    <div className="flex items-center mt-2">
                      <Radio
                        size="small"
                        value="free-delivery"
                        className="!py-1 !pl-0 !pr-2"
                      />
                      <h2>Free Standard Shipping (4-6 business days)</h2>
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="order-5 mt-8 col-span-full rounded p-2 border border-zinc-300">
            <div className="flex flex-col mobileL:flex-row flex-grow">
              <button
                type="submit"
                className="order-2 mt-3 mobileL:order-1 mobileL:mt-0 bg-gradient-to-r from-[#3a577c] to-[#275350] rounded p-2 mobileL:max-w-[10rem] w-full h-fit text-white font-medium"
              >
                Place your order
              </button>
              <div className="mobileL:ml-3 order-1 mobileL:order-2">
                <p className="text-red-600 text-lg font-semibold mb-1">
                  Order Total: $159.96
                </p>
                <p className="text-zinc-500">
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
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
