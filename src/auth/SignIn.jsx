import React from "react";
import Footer from "../components/Footer";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div className="flex flex-col min-h-screen md:grid md:grid-cols-2 gap-0 font-body">
        {/* Decorative brand panel - hidden on mobile */}
        <section className="relative hidden md:flex md:flex-1 bg-amber-700">
          <div>
            <img
              src="/signIn-img.jpg"
              alt=""
              role="presentation"
              className="relative inset-0 object-cover opacity-100 brightness-50 w-full"
            />
          </div>
          <div className="absolute z-10 inset-0 text-center justify-center flex flex-col text-white bg-[#FF7A18B2]/70">
            <div className="max-w-2xs mx-auto">
              <h2 className="text-4xl font-bold">Chuks Kitchen</h2>
              <p className="font-light text-lg">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
        </section>

        {/* Sign in form */}
        <section className="md:flex-1 flex justify-center items-center py-12 px-6 md:px-20">
          <div className="flex flex-col items-center w-full max-w-md bg-white">
            <div className="flex flex-col items-center mb-8 w-full">
              <img src="/logo.png" alt="Chuks Kitchen logo" className="mb-2" />
              <h2 className="text-xl md:text-2xl font-normal">
                Login your Account
              </h2>
            </div>

            <div className="w-full">
              <form className="w-full gap-4 flex flex-col">
                <label className="text-[#3B4758] flex flex-col gap-2">
                  Email or phone number
                  <div className="relative">
                    <IoMdMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="w-full pl-10 pr-4 py-3 outline-solid outline outline-[#BDBDBD] rounded-lg focus:outline-[#FF7A18] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </label>

                <label className="text-[#3B4758] flex flex-col gap-2">
                  Password
                  <div className="relative">
                    <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="password"
                      placeholder="******"
                      className="w-full pl-10 pr-4 py-3 outline-solid outline outline-[#BDBDBD] rounded-lg focus:outline-[#FF7A18] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </label>

                <div className="flex justify-end text-[#1E88E5] font-extralight text-xs">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <Link
                  to="/home"
                  type="submit"
                  className="bg-[#FF7A18] text-white text-center rounded-lg font-normal py-3 w-full"
                >
                Continue
                </Link>
              </form>
            </div>

            {/* Divider */}
            <div className="flex flex-col gap-2 w-full text-center mt-4">
              <p className="border-none text-[#1F2937] font-extralight">
                or continue with
              </p>
            </div>

            {/* Social login buttons */}
            <div className="flex flex-col w-full gap-3 mt-4">
              <button className="flex justify-center py-3 gap-2 items-center text-[#3B4758] text-sm w-full font-light rounded-md outline-solid outline outline-[#BDBDBD]">
                <span aria-hidden="true">
                  <img src="/google.png" alt="" className="size-4" />
                </span>
                Continue with Google
              </button>

              <button className="flex justify-center py-3 gap-2 items-center text-[#3B4758] text-sm w-full font-light rounded-md outline-solid outline outline-[#BDBDBD]">
                <span aria-hidden="true">
                  <FaFacebookF className="text-[#337FFF]" />
                </span>
                Continue with Facebook
              </button>

              <p className="text-center text-sm font-light">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#1E88E5]">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
