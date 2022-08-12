import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import React from "react";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { BsFillHandbagFill } from "react-icons/bs";
import Link from "next/link";

const Checkout = ({ cart, addToCart, removeCart, subTotal }) => {
  return (
    <div className="container m-auto font-spartan  ">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl pl-0 md:pl-10 flex items-center justify-center">
        1. Delivery Details
      </h2>
      <div className="flex my-4 m-auto ml-2 md:ml-10 ">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full pl-2 md:pl-10">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            cols="30"
            rows="2"
          ></textarea>
          <input />
        </div>
      </div>
      <div className="flex flex-wrap my-4 m-auto  ml-2 md:ml-10">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="number "
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl pl-0 md:pl-10 m-auto flex items-center justify-center mb-5">
        2. Review Cart Items
      </h2>
      <div className=" sidecart  bg-200 flex items-center justify-center py-10 ">
        <span className="absolute top-5 right-2 cursor-pointer text-2xl ">
          <AiFillCloseCircle />
        </span>
        <ol className=" w-full list-decimal font-semibold flex items-center justify-center">
          {Object.keys(cart).length == 0 && (
            <div className="flex items-center justify-center mt-4">
              <GiEmptyMetalBucketHandle className="text-xl" />
              <span className="text-xl mt-1 mx-2"> Your cart is empty !</span>
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="flex   my-3">
                  <div className="w-[100px] flex md:flex-row flex-col items-center ml-2 font-semibold">
                    {cart[k].name}
                  </div>
                  <img
                    className=" mx-2 w-[100px] h-[100px] rounded-md"
                    src={cart[k].img}
                    alt=""
                  />
                  <div className="flex font-semibold items-center justify-center w-1/3">
                    <AiFillMinusCircle
                      onClick={() =>
                        removeCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                          cart[k].img
                        )
                      }
                      className="mx-1 text-lg   cursor-pointer  "
                    />
                    {cart[k].qty}
                    <AiFillPlusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant,
                          cart[k].img
                        )
                      }
                      className="mx-1 text-lg cursor-pointer  "
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <span className="w-[30vh] md:w-[150vh] rounded-md m-auto p-3 opacity-100 hover:opacity-90 cursor-pointer bg-black flex items-center justify-center mt-5 total text-white font-bold">
        SubTotal: ₹{subTotal}
      </span>

      <button className="w-[30vh] md:w-[150vh] opacity-100 hover:opacity-90 cursor-pointer rounded-md m-auto p-3  bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-5 total text-white font-bold">
        Pay: ₹{subTotal}
      </button>
    </div>
  );
};

export default Checkout;
