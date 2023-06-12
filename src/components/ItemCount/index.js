import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemCount = ({onAdd, stock, initial}) => {
    const [quantity, setQuantity] = useState(initial)
    

    const increment = ( ) =>{
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement =()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success m-1" onClick={decrement}>
            -
          </button>
          <h4>{quantity}</h4>
          <button className="btn btn-success m-1" onClick={increment}>
            +
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink
            className="btn btn-primary m-1"
            to="/">
            Volver
          </NavLink>
          <button
            className="btn btn-primary m-1"
            onClick={() => onAdd(quantity)}
            disabled={!stock}>
            Agregar al carrito
          </button>
        </div>
      </div>
    );
};

export { ItemCount };
