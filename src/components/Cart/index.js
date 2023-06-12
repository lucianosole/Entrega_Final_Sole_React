import { useContext } from "react";
import { CartContext } from "../../context";
import { Link, NavLink } from "react-router-dom";
import { CartItem } from "../CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalCart } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="container text-center">
        <h1>No hay items en el carrito</h1>
        <Link className="btn btn-primary m-1"to="/">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="container">
      {cart.map((p) => (
        <CartItem key={p.id} productos={p} />
      ))}
      <h3>Total: $ {totalCart()}</h3>
      <NavLink className="btn btn-success m-1" to="/checkout">
        CheckOut
      </NavLink>
      <button className="btn btn-danger m-1" onClick={() => clearCart()}>
        Limpiar carrito !
      </button>
    </div>
  );
};

export { Cart };
