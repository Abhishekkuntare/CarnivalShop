import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden font-spartan">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Carnival
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order id #1938
              </h1>{" "}
              <p className="leading-relaxed mb-4">
                Your order has been successfully placed !
              </p>
              <div className="flex mb-4">
                <a className="flex-grow  border-b-2 text-center   py-2 text-lg px-1">
                  Item Description
                </a>
                <a className="flex-grow border-b-2  text-center border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
                <a className="flex-grow border-b-2 text-center  border-gray-300 py-2 text-lg px-1">
                  Total
                </a>
              </div>
              <div className="flex border-t border-gray-200 py-2 ">
                <span className="text-gray-500">T-shirt snap </span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">T-shirt snap </span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">T-shirt snap </span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="title-font font-medium mt-5 text-2xl text-gray-900">
                  SubTotal: ₹58.00
                </span>
                <button className="w-[20vh] md:w-[40vh] opacity-100 hover:opacity-90 cursor-pointer rounded-md m-auto p-3  bg-black flex items-center justify-center mt-5 total text-white font-bold">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1544441452-326ff5a947fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fybml2YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
