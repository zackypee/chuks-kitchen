import React from "react";
import NavSection from "../components/NavSection";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { useNavigate, Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, calculateTotals } = useCart();
  const navigate = useNavigate();
  const totals = calculateTotals();

  if (cart.length === 0) {
    return (
      <div>
        <NavSection />
        <main className="bg-gray-100 min-h-screen py-10 px-4 flex justify-center font-body">
          <div className="w-full max-w-md md:max-w-5xl flex flex-col gap-4 bg-white p-4 md:p-6 rounded-xl mt-14">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Add items to get started!</p>
              <Link
                to="/home"
                className="bg-orange-400 text-white rounded-lg px-6 py-2 hover:bg-orange-600 transition-colors inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavSection />

      <main className="bg-gray-100 min-h-screen py-10 px-4 flex justify-center font-body">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="md:flex-1 bg-white p-4 md:p-6 rounded-xl">
            <div>
              <h2 className="text-2xl font-bold mb-6">Your cart</h2>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border border-gray-300 rounded-xl p-3 mb-4 md:items-center md:h-30 md:px-4"
              >
                {/* Image */}
                <div className="w-20 h-20 object-cover md:h-full shrink-0">
                  <img
                    src={item.imgsrc || "/cart.jpg"}
                    alt={item.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-1 md:grid md:grid-cols-[2fr_1fr_0.7fr_0.3fr] md:items-center md:gap-6">
                  {/* Name & description */}
                  <div>
                    <h2 className="font-semibold text-sm md:text-lg">
                      {item.name}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500">
                      {item.text || "Delicious meal"}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-2 justify-between md:mt-0 md:justify-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 md:w-7 md:h-7 bg-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors"
                    >
                      <FaMinus size={10} />
                    </button>

                    <span className="text-sm md:text-lg font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 md:w-7 md:h-7 bg-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>

                  <div className="flex justify-between md:items-center">
                    {/* Price */}
                    <p className="text-orange-500 font-semibold text-sm md:text-lg md:text-center mt-2 md:mt-0">
                      ₦{(parseFloat(item.price?.replace('₦', '').replace(',', '') || 0) * item.quantity).toLocaleString()}
                    </p>

                    {/* Remove */}
                    <div className="flex justify-end md:justify-center mt-2 md:mt-0">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-7 h-7 bg-black md:bg-orange-500 text-white rounded-md flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <RxCross2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add more items */}
            <button
              onClick={() => navigate("/explore")}
              className="flex items-center gap-2 text-blue-600 mt-4 text-sm font-medium hover:text-blue-800 transition-colors"
            >
              <span className="text-xl">+</span>
              Add more items from Chuks Kitchen
            </button>
          </div>

          {/* Order Summary */}
          <div className="md:w-80 bg-white p-4 md:p-6 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <dl className="flex flex-col gap-3 mb-4">
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium">₦{totals.subtotal.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Delivery Fee</dt>
                <dd className="font-medium">₦{totals.deliveryFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Service Fee</dt>
                <dd className="font-medium">₦{totals.serviceFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Tax (5%)</dt>
                <dd className="font-medium">₦{totals.tax.toLocaleString()}</dd>
              </div>
              <hr className="border-gray-200 my-1" />
              <div className="flex justify-between font-bold text-lg">
                <dt>Total</dt>
                <dd>₦{totals.total.toLocaleString()}</dd>
              </div>
            </dl>

            <button
              onClick={() => navigate("/order")}
              className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
