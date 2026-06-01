import React, { useState } from "react";
import NavSection from "../components/NavSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";

export default function OrderComplete() {
  const [orderNumber] = useState(() => Math.floor(Math.random() * 1000000));
  return (
    <div>
      <NavSection />

      <main className="min-h-screen bg-gray-100 py-20 px-4 flex justify-center font-body">
        <div className="w-full max-w-md bg-white rounded-xl p-8 flex flex-col gap-6 shadow-sm text-center">
          {/* Success Icon */}
          <div className="flex justify-center">
            <MdCheckCircle className="text-green-500" size={80} />
          </div>

          {/* Success Message */}
          <div>
            <h1 className="font-bold text-2xl mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Your order has been successfully placed and is being prepared.
            </p>
          </div>

          {/* Order Info */}
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Order Number:</span>
            </p>
            <p className="text-lg font-bold text-orange-600 mb-4">
              #{orderNumber}
            </p>
            <p className="text-sm text-gray-600">
              You will receive a confirmation email and SMS shortly with your order details and estimated delivery time.
            </p>
          </div>

          {/* What's Next */}
          <div className="border-l-4 border-orange-400 bg-orange-50 p-4 text-left">
            <h3 className="font-bold mb-2">What's Next?</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Your order is being prepared</li>
              <li>✓ Driver will be assigned shortly</li>
              <li>✓ You'll receive delivery updates</li>
              <li>✓ Estimated delivery: 45-60 minutes</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/home"
              className="bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-medium text-center transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/explore"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-50 py-3 rounded-lg font-medium text-center transition-colors"
            >
              Order More
            </Link>
          </div>

          {/* Contact Support */}
          <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
            <p>Need help? </p>
            <p>Call us: <span className="font-medium text-gray-700">+234 XXX XXXX</span></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

