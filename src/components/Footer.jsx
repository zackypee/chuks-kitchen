import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerList = [
    { id: 1, page: "Home", link: "/home" },
    { id: 2, page: "Explore", link: "/explore" },
    { id: 3, page: "My Order", link: "/order" },
    { id: 4, page: "Account", link: "#" },
    { id: 5, page: "Contact", link: "#" },
  ];

  const socialLinks = [
    { id: 1, social: "Facebook", link: "https://www.facebook.com/truemindsltd" },
    { id: 2, social: "Twitter", link: "https://x.com/trumindsltd/" },
    { id: 3, social: "LinkedIn", link: "https://www.linkedin.com/company/truemindsltd/" },
    { id: 4, social: "Instagram", link: "https://www.instagram.com/truemindsltd/" },
  ];

  return (
    <div className="bg-[#61412e] flex flex-col font-footer py-14 hidden md:flex relative">
      <div className="flex justify-around text-white">
        <div className="flex flex-col text-center">
          <p>
            <img src="logo.png" alt="" />
          </p>
          <p className="text-left">
            Bringing the authentic <br /> flavors of Nigerian <br /> home
            cooking to your <br /> table, with passion <br /> and care.
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl">Quick Links</p>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            {footerList.map((item) => (
              <li key={item.id} className="hover:text-orange-200 transition hover:duration-300 cursor-pointer">
                <a href={item.link} target="_blank">{item.page}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl">Contact Us</p>
          <ul className="flex flex-col gap-2 mt-2 text-sm">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-4 text-sm cursor-pointer">
            {socialLinks.map((item) => (
              <li key={item.id} className="hover:text-orange-200 transition hover:duration-300 cursor-pointer">
                <a href={item.link} target="_blank">{item.social}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright + scroll to top row */}
      <div className="flex justify-between items-center px-28 mt-10">
        <p className="text-white text-sm">© 2020 Lift Media. All rights reserved.</p>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}