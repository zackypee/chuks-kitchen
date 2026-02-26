// import React, { useState } from "react";
// import { IoIosMenu } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";
// import { Link } from "react-router-dom";

// // FIX: Moved outside component — navList never changes so it shouldn't be recreated on every render
// const navList = [
//   { id: 1, page: "Home", link: "/home" },
//   { id: 2, page: "Explore", link: "/explore" },
//   { id: 3, page: "My Orders", link: "/order" },
//   { id: 4, page: "Account", link: "/account" },
// ];

// export default function NavSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMobileView = () => setIsOpen(false);

//   return (
//     // FIX: Removed unnecessary outer <div> wrapper
//     <nav className="font-body fixed top-0 left-0 right-0 z-40 shadow-lg bg-white">

//       {/* Top navigation bar */}
//       <div className="flex justify-between px-8 items-center h-12">
//         <div>
//           {/* FIX: Added descriptive alt text to logo */}
//           <img src="logo.png" alt="Chuks Kitchen logo" />
//         </div>

//         {/* Desktop nav links */}
//         <ul className="md:flex gap-24 hidden">
//           {navList.map((item) => (
//             <li
//               key={item.id}
//               className="hover:text-[#FF7A18] cursor-pointer transition-colors duration-300"
//             >
//               <Link to={item.link}>{item.page}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop login button */}
//         {/* FIX: Removed <button> inside <Link> — <Link> styled directly */}
//         <Link
//           to="/signin"
//           className="bg-[#FF7A18] w-25 h-8 rounded-lg text-white hidden md:flex items-center justify-center"
//         >
//           Login
//         </Link>

//         {/* Mobile menu toggle */}
//         {/* FIX: Changed <div> to <button> for keyboard accessibility */}
//         {/* FIX: Added aria-label and aria-expanded for screen readers */}
//         <button
//           className="md:hidden flex"
//           onClick={toggleMenu}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isOpen}
//         >
//           {isOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
//         </button>
//       </div>

//       {/* Mobile dropdown menu */}
//       {/* FIX: Added the actual mobile menu that was missing — isOpen was toggled but nothing rendered */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col bg-white px-8 pb-4 shadow-md">
//           {navList.map((item) => (
//             <li
//               key={item.id}
//               className="py-3 border-b border-gray-100 hover:text-[#FF7A18] transition-colors duration-300"
//             >
//               {/* FIX: closeMobileView now used here to close menu on link click */}
//               <Link to={item.link} onClick={closeMobileView}>
//                 {item.page}
//               </Link>
//             </li>
//           ))}
//           <li className="pt-4">
//             <Link
//               to="/signin"
//               onClick={closeMobileView}
//               className="bg-[#FF7A18] text-white rounded-lg py-2 w-full flex items-center justify-center"
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       )}

//     </nav>
//   );
// }






import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

const navList = [
  { id: 1, page: "Home", link: "/home" },
  { id: 2, page: "Explore", link: "/explore" },
  { id: 3, page: "My Orders", link: "/order" },
  { id: 4, page: "Account", link: "/account" },
];

export default function NavSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileView = () => setIsOpen(false);

  // active link style helper
  const navClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-semibold border-b-2 border-[#FF7A18]"
      : "hover:text-orange-600 transition-colors duration-300";

  return (
    <nav className="font-body fixed top-0 left-0 right-0 z-40 shadow-lg bg-white">
      {/* Top bar */}
      <div className="flex justify-between px-8 items-center h-12">
        <Link to="/home"><img src="logo.png" alt="Chuks Kitchen logo" /></Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-24">
          {navList.map((item) => (
            <li key={item.id}>
              <NavLink to={item.link} className={navClass}>
                {item.page}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login */}
        <Link
          to="/signin"
          className="bg-orange-400 hover:bg-orange-600 hover:shadow-md transition duration-300 w-25 h-8 rounded-lg text-white hidden md:flex items-center justify-center"
        >
          Login
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white px-8 pb-4 shadow-md">
          {navList.map((item) => (
            <li key={item.id} className="py-3 border-b border-gray-100">
              <NavLink
                to={item.link}
                onClick={closeMobileView}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "hover:text-orange-600 "
                }
              >
                {item.page}
              </NavLink>
            </li>
          ))}

          <li className="pt-4">
            <Link
              to="/signin"
              onClick={closeMobileView}
              className="bg-[#FF7A18] text-white rounded-lg py-2 w-full flex items-center justify-center"
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}