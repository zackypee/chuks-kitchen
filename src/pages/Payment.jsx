import React, { useState } from "react";
import NavSection from "../components/NavSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const navigate = useNavigate();
  const { calculateTotals, clearCart } = useCart();
  const totals = calculateTotals();

  const handlePayment = (e) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      if (!cardNumber || !expiryDate || !cvv || !cardName) {
        alert("Please fill in all card details");
        return;
      }
      if (cardNumber.length !== 16) {
        alert("Card number must be 16 digits");
        return;
      }
    } else if (paymentMethod === "bank") {
      if (!bankName || !accountNumber) {
        alert("Please fill in bank details");
        return;
      }
    }

    clearCart();
    navigate("/order-complete");
  };

  return (
    <div>
      <NavSection />

      <main className="min-h-screen bg-gray-100 py-20 px-4 flex justify-center font-body">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
          {/* Payment Form */}
          <form className="md:flex-1 bg-white rounded-xl p-6 shadow-sm" onSubmit={handlePayment}>
            <h1 className="font-bold text-2xl mb-6">Payment Method</h1>

            {/* Payment Method Selection */}
            <div className="mb-6 flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-medium">Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-medium">Bank Transfer</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-medium">Wallet</span>
              </label>
            </div>

            <hr className="border-gray-200 mb-6" />

            {/* Card Payment */}
            {paymentMethod === "card" && (
              <div className="space-y-4 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cardName" className="text-sm font-medium">
                    Cardholder Name *
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cardNumber" className="text-sm font-medium">
                    Card Number *
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, "").slice(0, 16))}
                    maxLength="16"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="expiry" className="text-sm font-medium">
                      Expiry Date *
                    </label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="cvv" className="text-sm font-medium">
                      CVV *
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.slice(0, 4))}
                      maxLength="4"
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bank Transfer */}
            {paymentMethod === "bank" && (
              <div className="space-y-4 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="bankName" className="text-sm font-medium">
                    Bank Name *
                  </label>
                  <input
                    id="bankName"
                    type="text"
                    placeholder="Your Bank Name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="accountNumber" className="text-sm font-medium">
                    Account Number *
                  </label>
                  <input
                    id="accountNumber"
                    type="text"
                    placeholder="Your Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>
              </div>
            )}

            {/* Wallet */}
            {paymentMethod === "wallet" && (
              <div className="py-8 text-center text-gray-600 mb-6">
                <p>Wallet payment method coming soon!</p>
              </div>
            )}

            {/* Payment Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Pay ₦{totals.total.toLocaleString()}
            </button>
          </form>

          {/* Order Summary */}
          <div className="md:w-80 bg-white rounded-xl p-6 h-fit shadow-sm">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            <hr className="border-gray-200 mb-4" />

            <dl className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium">₦{totals.subtotal.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Delivery</dt>
                <dd className="font-medium">₦{totals.deliveryFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Service Fee</dt>
                <dd className="font-medium">₦{totals.serviceFee.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between text-sm">
                <dt className="text-gray-600">Tax</dt>
                <dd className="font-medium">₦{totals.tax.toLocaleString()}</dd>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between font-bold text-lg">
                <dt>Total Due</dt>
                <dd className="text-orange-600">₦{totals.total.toLocaleString()}</dd>
              </div>
            </dl>

            <div className="text-xs text-gray-500 text-center py-3 border-t border-gray-200">
              <p>Your payment is secure and encrypted</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

