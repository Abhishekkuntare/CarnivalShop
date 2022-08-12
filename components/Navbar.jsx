import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillHandbagFill, BsFillBagFill } from "react-icons/bs";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({ cart, addToCart, removeCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <div className="flex flex-col  md:flex-row md:justify-start  justify-center items-center navbar shadow-md font-spartan sticky top-0 bg-white z-50 ">
      <div className="mx-10  mt-3 mb-3 ">
        <Link href={"/"}>
          <a>
            <h1 className={styles.logo}>THE CARNIVAL</h1>
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-md mt-5 mb-5">
          <Link href={"/tshirt"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoddies</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 flex top-4">
        <Link href={"/login"}>
          <a>
            <MdAccountCircle className="cursor-pointer   text-3xl mx-2" />
          </a>
        </Link>
        <BsFillBagFill
          onClick={toggleCart}
          className="cursor-pointer   text-3xl "
        />
      </div>

      <div
        ref={ref}
        className={`  w-72 h-[100vh]  sidecart absolute right-0 top-0 bg-green-200 px-8 py-10 transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="font-bold text-center  text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl "
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
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
                  <div className="w-2/2 ml-2 font-semibold">{cart[k].name}</div>
                  <img className=" mx-2 w-10 h-10 " src={cart[k].img} alt="" />
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

        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mx-auto mt-16 text-white bg-black border-0 py-2 px-2 focus:outline-none  transition-all ease-in-out  hover:bg-slate-900 rounded text-sm text-bold">
              <BsFillHandbagFill className=" mx-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-auto mt-16 text-black bg-white border-0 py-2 px-2 focus:outline-none transition-all ease-in-out hover:bg-slate-100 rounded text-sm align-text-bold"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
