import { useContext, useState } from "react";
import { CartContext } from "../../context";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { CheckoutForm } from "../CheckoutForm";
import { NavLink } from "react-bootstrap";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, totalCart, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalCart(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("No hay suficiente stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está procesando su pedido...</h1>;
  }

  if (orderId) {
    return (
      <div className="container text-center">
        <h1>Gracias por su compra</h1>
        <h2>Su pedido ha sido procesado con éxito, su numero de pedido es:</h2>
        <h1>
          <strong>{orderId}</strong>
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export { Checkout };
