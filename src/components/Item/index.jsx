import { Link } from "react-router-dom";

const Item = ({
  id,
  nombre,
  categoria,
  precio,
  marca,
  imagen,
  detalle,
  stock,
}) => {
  return (
    <>
      <div className="card my-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={`./img/${imagen}`} alt={nombre} />
        <div className="card-body">
          <h2 className="card-title">Nombre: {nombre}</h2>
          <p className="card-text">Detalle: {detalle}</p>
          <h4>Precio: $ {precio}</h4>
          <Link className="btn btn-secondary m-1" to={`/item/${id}`}>
            Ver detalle
          </Link>
        </div>
      </div>
    </>
  );
};

export { Item };
