import React from "react";
import NavSection from "../components/NavSection";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Cart() {
  const cart = [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      text: "With Plantain, extra pepper sauce",
      price: "₦3,500",
      imgsrc: "cart.jpg",
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      text: "With Plantain, extra pepper sauce",
      price: "₦3,500",
      imgsrc: "cart.jpg",
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      text: "With Plantain, extra pepper sauce",
      price: "₦3,500",
      imgsrc: "cart.jpg",
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      text: "With Plantain, extra pepper sauce",
      price: "₦3,500",
      imgsrc: "cart.jpg",
    },
  ];

  function incrementToggle() {
    setIncrement((prev) => prev + 1);
  }

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}),
  );

  const increment = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  const decrement = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));

  return (
    <div>
      <NavSection />

      <main className="bg-gray-100 min-h-screen py-10 px-4 flex   justify-center font-body">
        <div className="w-full max-w-md md:max-w-5xl flex flex-col gap-4 bg-white p-4 md:p-6 rounded-xl mt-14">
          <div>
            <h2 className="hidden md:block text-2xl font-bold">Your cart</h2>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="
                flex gap-3 border border-gray-300 rounded-xl p-3
                md:items-center md:h-30 md:px-4
              "
            >
              {/* Image */}
              <div className="w-20 h-20 object-cover md:h-full shrink-0">
                <img
                  src={item.imgsrc}
                  alt={item.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              {/* Content */}
              <div
                className="
                  flex flex-col flex-1 gap-1
                  md:grid md:grid-cols-[2fr_1fr_0.7fr_0.3fr]
                  md:items-center md:gap-6
                "
              >
                {/* Name & description */}
                <div>
                  <h2 className="font-semibold text-sm md:text-lg">
                    {item.name}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.text}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-2 justify-between md:mt-0 md:justify-center">
                  <button
                    onClick={() => increment(item.id)}
                    className="w-6 h-6 md:w-7 md:h-7 bg-gray-300 rounded flex items-center justify-center cursor-pointer"
                  >
                    <FaPlus size={10} />
                  </button>

                  <span className="text-sm md:text-lg font-medium">
                    {quantities[item.id]}
                  </span>

                  <button
                    onClick={() => decrement(item.id)}
                    className="w-6 h-6 md:w-7 md:h-7 bg-gray-300 rounded flex items-center justify-center"
                  >
                    <FaMinus size={10} />
                  </button>
                </div>

                <div className="flex justify-between  items-center">
                  {/* Price */}
                  <p className="text-orange-500 font-semibold text-sm md:text-lg md:text-center mt-2 md:mt-0">
                    {item.price}
                  </p>

                  {/* Remove */}
                  <div className="flex justify-end md:justify-center mt-2 md:mt-0">
                    <button className="w-7 h-7 bg-black md:bg-orange-500 text-white rounded-md flex items-center justify-center">
                      <RxCross2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add more items */}
          <button className="flex items-center gap-2 text-blue-600 mt-4 text-sm font-medium">
            <span className="text-xl">+</span>
            Add more items from Chuks Kitchen
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
