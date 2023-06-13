import { useContext } from "react";
import cart from "./assets/cart.png";
import { CartContext } from "../../context";
import { NavLink } from "react-router-dom";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  
  return (
    <>
      <NavLink to="/cart" className="text-white text-decoration-none">
        <img className="m-1 rounded" src={cart} alt="cart" />
        <span className="badge bg-secondary rounded-pill">
          {totalQuantity()}
        </span>
      </NavLink>
    </>
  );
};

export { CartWidget };
