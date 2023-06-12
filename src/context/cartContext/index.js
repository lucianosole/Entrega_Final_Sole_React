import { createContext, useState } from "react";

export const CartContext = createContext ({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const getId = (id) => cart.find((e) => e.id === id) || null;
  
  const addItem = (item, quantity) => {
    const product = getId(item.id); 
    if (!product) {
      item.quantity = quantity;
      setCart([...cart, item]);
    } else {
      if (product.quantity + quantity > product.stock)
      return false;
      product.quantity += quantity;
    }
    setTotal(total + quantity);
    return true;
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const totalCart = () => {
    const precioTotal = cart.reduce(
      (acc, item) => acc + item.precio * item.quantity,
      0
    );
    return precioTotal;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalQuantity,
        totalCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
