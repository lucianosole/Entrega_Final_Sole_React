import { useContext } from "react";
import { CartContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({productos}) => {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <div>
        <div
          className="container card my-2 d-flex flex-row justify-content-around align-items-center"
          key={productos.id}>
          <img
            style={{ width: "80px" }}
            src={`./img/${productos.imagen}`}
            alt={productos.nombre}></img>
          <h3>{productos.nombre}</h3>
          <p>$ {productos.precio}</p>
          <p>{`Cantidad: X${productos.quantity}`}</p>
          <button
            className="btn btn-warning"
            onClick={() => removeItem(productos.id)}>
            Quitar{" "}
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </>
  );
   
};

export { CartItem };
