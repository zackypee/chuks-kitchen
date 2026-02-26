import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <div>
      <div className="flex flex-col min-h-screen md:grid md:grid-cols-2 gap-0 font-body">
        {/* Decorative brand image - hidden on mobile */}
        <section className="hidden md:flex md:flex-1">
          <div>
            <img
              src="/signIn-img.jpg"
              alt=""
              role="presentation"
              className="w-full"
            />
          </div>
        </section>

        {/* Onboarding content */}
        <section className="md:flex-1 flex flex-col gap-2 md:gap-6 md:justify-around md:px-10 md:min-w-0 px-6 pb-4">
          {/* Top navigation bar */}

          <div className="flex flex-col md:flex md:flex-row md:justify-between md:items-center">
            <div className="flex w-full ">
              <img
                src="onboard.jpg"
                alt=""
                role="presentation"
                className="flex md:hidden"
              />
              <img
                src="logo.png"
                alt="Chuks Kitchen logo"
                className="hidden md:flex h-10"
              />
            </div>
            <div className="flex  w-full justify-end-safe mt-4 md:flex ">
              <Link
                to="/signin"
                className="border-blue-600  flex justify-center hover:shadow-md hover:bg-blue-400 transiton duration-300 hover:text-white text-blue-400 border px-2 py-2 rounded-lg w-25 md:w-30 "
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Hero content */}
          <div className="flex flex-col gap-2 items-center justify-center mt-4 ">
            <img
              src="logo.png"
              alt="Chuks Kitchen logo"
              className="w-45 md:hidden"
            />
            <h2 className="font-bold text-2xl">
              Your Authentic Taste of Nigeria
            </h2>
            <p>
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-col gap-2 w-full mb-6 md:grid md:grid-cols-2">
              <div className="bg-gray-200 py-3 flex gap-2 px-2 items-center rounded-lg md:bg-white">
                <span
                  className="bg-orange-200 px-2 py-2 rounded-xl"
                  aria-hidden="true"
                >
                  <img src="Vector.png" alt="" />
                </span>
                Freshly Prepared
              </div>
              <div className="bg-gray-200 py-3 flex gap-2 px-2 items-center rounded-lg md:bg-white">
                <span
                  className="bg-orange-200 px-2 py-2 rounded-xl"
                  aria-hidden="true"
                >
                  <img src="Vector.png" alt="" />
                </span>
                Freshly Prepared
              </div>
              <div className="bg-gray-200 py-3 flex gap-2 px-2 items-center rounded-lg md:bg-white">
                <span
                  className="bg-orange-200 px-2 py-2 rounded-xl"
                  aria-hidden="true"
                >
                  <img src="Vector.png" alt="" />
                </span>
                Freshly Prepared
              </div>
              <div className="bg-gray-200 py-3 flex gap-2 px-2 items-center rounded-lg md:hidden">
                <span
                  className="bg-orange-200 px-2 py-2 rounded-xl"
                  aria-hidden="true"
                >
                  <img src="Vector.png" alt="" />
                </span>
                Freshly Prepared
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col gap-4 w-full">
              <button className="bg-orange-400 hover:bg-orange-600 transition duration-300 cursor-pointer text-white font-semibold rounded-lg py-3">
                Start Your Order
              </button>
              <Link
                to="/about"
                className="border-blue-600 border text-blue-400 hover:text-white hover:bg-blue-400 transiton duration-300 font-semibold rounded-lg py-3 text-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Page footer links */}
          <footer className="hidden md:flex md:gap-2 md:flex-col text-center">
            <hr className="text-gray-100" />
            <p>
              © 2024 Chuks Kitchen.{" "}
              <Link to="/privacy" className="text-blue-400">
                Privacy Policy
              </Link>{" "}
              <Link to="/terms" className="text-blue-400">
                Terms of Service
              </Link>
            </p>
          </footer>
        </section>
      </div>
      <Footer />
    </div>
  );
}
