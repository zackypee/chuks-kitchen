import React, { useState } from "react";
import NavSection from "../components/NavSection";
import Footer from "../components/Footer";

export default function Order() {
  const [deliveryMode, setDeliveryMode] = useState("delivery");
  const [promoCode, setPromoCode] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <div>
      <NavSection />

      <main className="min-h-screen bg-gray-100 py-20 px-4 flex justify-center">
        <div className="w-full max-w-lg bg-white rounded-xl p-6 flex flex-col gap-5 shadow-sm">

          {/* Title */}
          <div>
            <h1 className="font-bold text-2xl mb-3">Order Summary</h1>
            <hr className="border-gray-200" />
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
              <button className="bg-orange-400 hover:bg-orange-600 w-40 text-white md:px-5 md:py-2 rounded-lg text-sm font-medium">
                Login
              </button>
            </div>
          </div>

          {/* Price Breakdown */}
          <dl className="flex flex-col gap-2">
            <div className="flex justify-between text-sm text-gray-600">
              <dt>Subtotal</dt>
              <dd>₦9,200</dd>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <dt>Delivery Fee</dt>
              <dd>₦500</dd>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <dt>Service Fee</dt>
              <dd>₦200</dd>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <dt>Tax</dt>
              <dd>₦0</dd>
            </div>
            <hr className="border-gray-200 mt-1" />
            <div className="flex justify-between font-bold text-base mt-1">
              <dt>Total</dt>
              <dd>₦9,900</dd>
            </div>
          </dl>

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
            type="button"
            className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-medium text-sm transition-colors"
          >
            Proceed to Checkout
          </button>

        </div>
      </main>

      <Footer />
    </div>
  );
}