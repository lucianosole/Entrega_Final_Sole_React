import { useEffect, useState } from "react";
import { ItemList } from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "items"), where("categoria", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="text-center">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export { ItemListContainer };
