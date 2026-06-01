import React, { useState } from "react";
import NavSection from "../components/NavSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Order() {
  const [deliveryMode, setDeliveryMode] = useState("delivery");
  const [promoCode, setPromoCode] = useState("");
  const [instructions, setInstructions] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { calculateTotals, cart } = useCart();
  const totals = calculateTotals();

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!address.trim() || !phone.trim()) {
      alert("Please fill in delivery address and phone number");
      return;
    }
    navigate("/payment");
  };

  return (
    <div>
      <NavSection />

      <main className="min-h-screen bg-gray-100 py-20 px-4 flex justify-center font-body">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
          {/* Order Form */}
          <form className="md:flex-1 bg-white rounded-xl p-6 flex flex-col gap-5 shadow-sm">
            {/* Title */}
            <div>
              <h1 className="font-bold text-2xl mb-3">Delivery Details</h1>
              <hr className="border-gray-200" />
            </div>

            {/* Delivery Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm font-medium">
                Delivery Address *
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
              />
            </div>

            {/* Promo Code */}
            <div className="flex flex-col gap-2">
              <label htmlFor="promo" className="text-sm font-medium">
                Add a Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  id="promo"
                  type="text"
                  placeholder="Enter Code here"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                />
                <button
                  type="button"
                  className="bg-orange-400 hover:bg-orange-600 w-40 text-white md:px-5 md:py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Delivery / Pick Up Toggle */}
            <fieldset className="flex rounded-lg overflow-hidden border border-gray-200">
              <legend className="sr-only">Fulfillment Method</legend>
              <button
                type="button"
                onClick={() => setDeliveryMode("delivery")}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  deliveryMode === "delivery"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                Delivery
              </button>
              <button
                type="button"
                onClick={() => setDeliveryMode("pickup")}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  deliveryMode === "pickup"
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                Pick up
              </button>
            </fieldset>

            {/* Special Instructions */}
            <div className="flex flex-col gap-2">
              <label htmlFor="instructions" className="text-sm font-medium">
                Special Instructions for Restaurant
              </label>
              <textarea
                id="instructions"
                rows={4}
                placeholder="E.g no onion, food is too spicy..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400 resize-none"
              />
            </div>

            {/* Proceed Button */}
            <button
              type="submit"
              onClick={handleProceedToPayment}
              className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-medium text-sm transition-colors"
            >
              Proceed to Checkout
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <div className="md:w-80 bg-white rounded-xl p-6 h-fit shadow-sm">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            <hr className="border-gray-200 mb-4" />

            {/* Price Breakdown */}
            <dl className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <dt>Subtotal</dt>
                <dd>₦{totals.subtotal.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <dt>Delivery Fee</dt>
                <dd>₦{totals.deliveryFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <dt>Service Fee</dt>
                <dd>₦{totals.serviceFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <dt>Tax</dt>
                <dd>₦{totals.tax.toLocaleString()}</dd>
              </div>
              <hr className="border-gray-200 mt-2" />
              <div className="flex justify-between font-bold text-base mt-2">
                <dt>Total</dt>
                <dd>₦{totals.total.toLocaleString()}</dd>
              </div>
            </dl>

            {/* Items Count */}
            <div className="text-sm text-gray-600 py-2 border-t border-gray-200">
              <p>{cart.length} item{cart.length !== 1 ? 's' : ''} in cart</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}