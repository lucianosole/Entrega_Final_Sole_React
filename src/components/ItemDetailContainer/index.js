import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "items", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
    })
      .finally(() => {
        setLoading(false);
    })
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...products} />
    </div>
  );
};

export { ItemDetailContainer };
