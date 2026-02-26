import React, { useState } from "react";
import NavSection from "../components/NavSection";
import { IoIosSearch } from "react-icons/io";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const chefSpecial = [
  {
    id: 1,
    name: "Spicy Tilapia Pepper Soup",
    imgSrc: "/special1.jpg",
    price: "₦3,500",
    text: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
  },
  {
    id: 2,
    name: "Jollof Rice & Fried Chicken",
    imgSrc: "/popular1.jpg",
    price: "₦3,500",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
  },
  {
    id: 3,
    name: "Jollof Rice & Smoked Chicken",
    imgSrc: "/popular1.jpg",
    price: "₦3,500",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
  },
  {
    id: 4,
    name: "Spicy Tilapia Pepper Soup",
    imgSrc: "/Special5.jpg",
    price: "₦3,500",
    text: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
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

export default function Home() {
  const popularCategories = [
    { id: 1, name: "Jollof Delights", imgSrc: "/popular1.jpg" },
    { id: 2, name: "Swallow & Soups", imgSrc: "/popular2.jpg" },
    { id: 3, name: "Grills & BBQ", imgSrc: "/popular3.jpg" },
    { id: 4, name: "Sweet Treats", imgSrc: "/popular4.jpg" },
    { id: 5, name: "Sweet Treats", imgSrc: "/popular4.jpg" },
    { id: 6, name: "Sweet Treats", imgSrc: "/popular4.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [viewSpecial, setViewSpecial] = useState(false);

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
                The Heart of Nigerian Home Cooking
              </h1>
              <p className="text-white text-lg md:text-xl font-medium">
                Handcrafted with passion, delivered with care.
              </p>
              <button className="bg-[#FF7A18] text-white px-6 py-4 rounded-xl self-start text-lg font-medium hover:bg-orange-600 transition-colors">
                Discover what's new
              </button>
            </div>
          </div>
        </section>

        {/* Search section */}
        <section className="-mt-10 z-20 relative px-8 md:px-44 mb-8">
          <div className="px-6 w-full bg-white font-semibold py-4 flex items-center gap-2 rounded-xl shadow-2xl">
            <label htmlFor="search" className="sr-only">
              Search menu items
            </label>
            <IoIosSearch size={30} className="text-[#807373]" />
            <input
              id="search"
              type="text"
              placeholder="What are you craving for today?"
              className="w-full placeholder:text-[#1F2937] placeholder:px-2 outline-none"
            />
          </div>
        </section>

        {/* Popular Categories */}
        <section className="mt-28">
          <div className="text-center mb-6">
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
                <div className="w-full h-48">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white py-4 text-center">
                  <h3 className="font-bold text-gray-800 text-base">
                    {item.name}
                  </h3>
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

        {/* Chef's Specials */}
        <section className="mt-28">
          <div className="text-center mb-6">
            <h2 className="font-bold text-2xl">Chef's Specials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
            {chefSpecial.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col rounded-xl overflow-hidden border bg-white border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                  !viewSpecial && index >= 3 ? "hidden md:flex" : ""
                }`}
              >
                <div className="h-48 w-full">
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-6 bg-white">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-2 font-light text-sm">{item.text}</p>
                  <div className="flex justify-between mt-4 items-center">
                    <p className="text-[#FF7A18] text-xs font-semibold">
                      {item.price}
                    </p>
                    <Link
                      to="/cart"
                      aria-label={`Add ${item.name} to cart`}
                      className="bg-[#FF7A18] text-white rounded-lg px-5 py-2 hover:bg-orange-600 transition-colors"
                    >
                      Add to cart
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {chefSpecial.length > 3 && (
            <div className="text-center mt-6 md:hidden">
              <button
                onClick={() => setViewSpecial(!viewSpecial)}
                className="border-none text-[#1E88E5] font-light hover:text-orange-600 transition-colors"
              >
                {viewSpecial ? "View Less" : "View All Specials"}
              </button>
            </div>
          )}
        </section>

        {/* New menu promotional banner */}
        <section className="relative w-full h-100 md:h-125 mt-28 overflow-hidden">
          <img
            src="/intro.png"
            alt="New menu additions banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-10 flex flex-col gap-6 px-6 md:px-12 text-left justify-center bg-black/30">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Introducing Our New Menu Additions!
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl">
              Explore exciting new dishes, crafted with the freshest ingredients
              and authentic Nigerian flavors. Limited time offer!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors w-fit">
              Discover what's new
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
