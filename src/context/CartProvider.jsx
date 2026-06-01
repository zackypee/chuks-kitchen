import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }
    }
    return [];
  });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + (item.quantity || 1) }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce(
      (total, item) => {
        const price = parseFloat(item.price?.replace('₦', '').replace(',', '') || 0);
        return total + price * item.quantity;
      },
      0
    );

    const deliveryFee = 500;
    const serviceFee = 200;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + deliveryFee + serviceFee + tax;

    return {
      subtotal,
      deliveryFee,
      serviceFee,
      tax,
      total,
    };
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotals,
    cartTotal: cart.length,
  };

  localStorage.setItem('cart', JSON.stringify(cart));

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
