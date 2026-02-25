import React from "react";

export default function Footer() {
  const footerList = [
    {id:1, page:"Home", link: "#"},
    {id:2, page:"Explore", link: "#"},
    {id:3, page:"My Order", link: "#"},
    {id:4, page:"Account", link: "#"},
    {id:5, page:"Contact", link: "#"}
  ]
  return (
    <div className="bg-[#61412e] flex flex-col font-footer py-14 hidden md:flex ">
      <div className="flex  justify-around text-white  ">
        <div className="flex flex-col text-center">
          <p>
            <img src="logo.png" alt="" />
          </p>
          <p className="text-left">
            Bringing the authentic <br /> flavors of Nigerian <br /> home
            cooking to your <br />
            table, with passion <br /> and care.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">Quick Links</p>
          <ul className="flex flex-col gap-2 mt-2 text-sm cursor-pointer">
            {footerList.map((item)=> (
              <li key={item.id}> <a href={item.link}>{item.page}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">Contact Us</p>
          <ul className="flex flex-col gap-2 mt-2 text-sm ">
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-sm cursor-pointer">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white text-sm px-28 mt-10">
          © 2020 Lift Media. All rights reserved.
        </p>
      </div>
    </div>
  );
}
