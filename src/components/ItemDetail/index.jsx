import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/index";

const ItemDetail = ({ id, imagen, nombre, marca, detalle, precio, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const item = { id, imagen, nombre, marca, detalle, precio, stock };

  const handledOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
  };

  return (
    <>
      <div className="container card d-flex flex-row justify-content-evenly align-items-center my-2">
        <picture>
          <img
            className="img-fluid rounded"
            src={`../img/${imagen}`}
            alt={nombre}
          />
        </picture>
        <div>
          <h2>Nombre: {nombre}</h2>
          <h2>Marca: {marca}</h2>
          <h4>Detalle: {detalle}</h4>
          <section>
            <h4>Precio: $ {precio}</h4>
          </section>
        </div>
      </div>
      <footer className="card container my-2">
        {quantityAdded > 0 ? (
          <>
            <Link className="btn btn-primary mx-auto my-1" to="/">
              Agregar más productos
            </Link>
            <Link className="btn btn-primary my-1 mx-auto" to="/cart">
              Terminar compra
            </Link>
          </>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handledOnAdd} />
        )}
      </footer>
    </>
  );
};

export { ItemDetail };
