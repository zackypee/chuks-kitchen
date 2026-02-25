import React, { useState } from "react";
import NavSection from "../components/NavSection";
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa6";

export default function Explore() {
  const popularCategories = [
    {
      id: 1,
      name: "Jollof Delights",
      imgSrc: "/popular1.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: 2,
      name: "Swallow & Soups",
      imgSrc: "swallow1.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: 3,
      name: "Grills & BBQ",
      imgSrc: "swallow2.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: 4,
      name: "Sweet Treats",
      imgSrc: "snail.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: 5,
      name: "Sweet Treats",
      imgSrc: "fish.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
    {
      id: 6,
      name: "Jollof Rice & Fried Chicken",
      imgSrc: "/popular1.jpg",
      text: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [showAllRice, setShowAllRice] = useState(false);
  const [showAllSwallow, setShowAllSwallow] = useState(false);

  const riceEntrees = [
    {
      id: 1,
      name: "Jollof Rice & Smoked Fish",
      imgSrc: "jollof2.jpg",
      price: "₦3,500",
      text: "Flavorful jollof rice served with perfectly smoked fish.",
    },
    {
      id: 2,
      name: "Party Jollof Rice (Veg)",
      imgSrc: "popular1.jpg",
      price: "₦3,500",
      text: "Vegetarian party jollof, full of rich flavors.",
    },
    {
      id: 3,
      name: "Party Jollof Rice (Veg)",
      imgSrc: "popular1.jpg",
      price: "₦3,500",
      text: "Vegetarian party jollof, full of rich flavors.",
    },
    {
      id: 4,
      name: "Spicy Tilapia Pepper Soup",
      imgSrc: "/Special5.jpg",
      price: "₦3,500",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.",
    },
    {
      id: 5,
      name: "Spicy Tilapia Pepper Soup",
      imgSrc: "/Special5.jpg",
      price: "₦3,500",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    },
    {
      id: 6,
      name: "Egusi Soup & Pounded Yam",
      imgSrc: "/Special6.jpg",
      price: "₦3,500",
      text: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    },
  ];

  const swallowSoup = [
    {
      id: 1,
      name: "Amala with Gbegiri & Ewedu",
      imgSrc: "soup1.jpg",
      price: "₦3,500",
      text: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    },
    {
      id: 2,
      name: "Fufu & Okra Soup (Fish)",
      imgSrc: "popular1.jpg",
      price: "₦3,500",
      text: "Light Fufu served with fresh okra soup and tilapia fish. ith succulent Smoked chicken.",
    },
    {
      id: 3,
      name: "Fufu & Okra Soup (Fish)",
      imgSrc: "popular1.jpg",
      price: "₦3,500",
      text: "Light Fufu served with fresh okra soup and tilapia fish. ith succulent Smoked chicken.",
    },
    {
      id: 4,
      name: "Spicy Tilapia Pepper Soup",
      imgSrc: "/Special5.jpg",
      price: "₦3,500",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.",
    },
    {
      id: 5,
      name: "Spicy Tilapia Pepper Soup",
      imgSrc: "/Special5.jpg",
      price: "₦3,500",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    },
    {
      id: 6,
      name: "Egusi Soup & Pounded Yam",
      imgSrc: "/Special6.jpg",
      price: "₦3,500",
      text: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    },
  ];

  return (
    <div className="font-body">
      <NavSection />

      <main className="pt-10 bg-gray-100">
        {/* Hero section */}
        <section className="flex">
          <div className="relative w-screen h-screen">
            <img
              src="/Welcome.jpg"
              alt="Nigerian home cooking dishes"
              className="absolute inset-0 object-cover opacity-100 brightness-50 w-full h-full"
            />
            <div className="absolute z-10 inset-0 flex flex-col gap-10 px-6 text-left justify-center">
              <h1 className="text-white font-bold text-4xl max-w-lg">
                Chuks Kitchen
              </h1>
              <p className="text-white text-lg md:text-xl font-medium">
                Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
              </p>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mt-28">
          <div className="text-start px-6 mb-6">
            <h2 className="font-bold text-2xl">Popular Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            {popularCategories.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col rounded-xl overflow-hidden border bg-white border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                  !showAll && index >= 3 ? "hidden md:flex" : ""
                }`}
              >
                <div className="flex p-0.5 bg-white md:flex-col md:p-0">
                  <div className="w-32 h-32 md:w-full md:h-48">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover p-1 md:p-0"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 pl-2 md:bg-white md:px-4 md:py-4">
                    <div className="py-2 text-left">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="font-light text-sm">{item.text}</p>
                    </div>
                    <div className="flex justify-between px-4 md:pb-8 items-center bg-white md:py-4">
                      <p className="text-orange-400">₦3,500</p>
                      <button
                        aria-label={`Add ${item.name} to cart`}
                        className="bg-orange-400 rounded-full size-5 items-center justify-center flex"
                      >
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {popularCategories.length > 3 && (
            <div className="text-center mt-6 md:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border-none text-[#1E88E5] font-light hover:text-orange-600 transition-colors"
              >
                {showAll ? "View Less" : "View All Categories"}
              </button>
            </div>
          )}
        </section>

        {/* Jollof Rice & Entrees */}
        <section className="mt-28">
          <div className="text-start mb-6 px-6">
            <h2 className="font-bold text-2xl">Jollof Rice & Entrees</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 px-6">
            {riceEntrees.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col rounded-xl overflow-hidden border bg-white border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                  index >= 3 ? "md:hidden" : ""
                } ${!showAllRice && index >= 3 ? "hidden" : ""}`}
              >
                <div className="flex p-0.5 bg-white md:flex-col md:p-0">
                  <div className="w-32 h-32 md:w-full md:h-48">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover p-1 md:p-0"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 pl-2 md:bg-white md:py-4 md:px-4">
                    <div className="py-2 text-left">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="font-light text-sm">{item.text}</p>
                    </div>
                    <div className="flex justify-between px-4 md:pb-8 items-center bg-white md:py-4">
                      <p className="text-orange-400">{item.price}</p>
                      <button
                        aria-label={`Add ${item.name} to cart`}
                        className="bg-orange-400 rounded-full size-5 items-center justify-center flex"
                      >
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {riceEntrees.length > 3 && (
            <div className="text-center mt-6 md:hidden">
              <button
                onClick={() => setShowAllRice(!showAllRice)}
                className="border-none text-[#1E88E5] font-light hover:text-orange-600 transition-colors"
              >
                {showAllRice ? "View Less" : "View All Entrees"}
              </button>
            </div>
          )}
        </section>

        {/* Swallow & Soups */}
        <section className="mt-28">
          <div className="text-start mb-6 px-6">
            <h2 className="font-bold text-2xl">Swallow & Soups</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 px-6">
            {swallowSoup.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col rounded-xl overflow-hidden border bg-white border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                  index >= 3 ? "md:hidden" : ""
                } ${!showAllSwallow && index >= 3 ? "hidden" : ""}`}
              >
                <div className="flex p-0.5 bg-white md:flex-col md:p-0">
                  <div className="w-32 h-32 md:w-full md:h-48">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover p-1 md:p-0"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 pl-2 md:bg-white md:px-4 md:py-4">
                    <div className="py-2 text-left">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="font-light text-sm">{item.text}</p>
                    </div>
                    <div className="flex justify-between px-4 md:pb-8 items-center bg-white md:py-4">
                      <p className="text-orange-400">{item.price}</p>
                      <button
                        aria-label={`Add ${item.name} to cart`}
                        className="bg-orange-400 rounded-full size-5 items-center justify-center flex"
                      >
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {swallowSoup.length > 3 && (
            <div className="text-center mt-6 md:hidden">
              <button
                onClick={() => setShowAllSwallow(!showAllSwallow)}
                className="border-none text-[#1E88E5] font-light hover:text-orange-600 transition-colors"
              >
                {showAllSwallow ? "View Less" : "View All Soups"}
              </button>
            </div>
          )}
        </section>
        <div className="h-10 w-full bg-white mt-14 hidden md:block"></div>
      </main>

      <Footer />
    </div>
  );
}
