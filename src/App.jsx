import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./auth/SignUp";
import Order from "./pages/Order";
import SignIn from "./auth/SignIn";
import Onboarding from "./pages/Onboarding";
import Explore from "./pages/Explore";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderComplete from "./pages/OrderComplete";
import { CartProvider } from "./context/CartProvider";

export default function App() {
 return (
  <CartProvider>
    <div>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </div>
  </CartProvider>
 )
}
