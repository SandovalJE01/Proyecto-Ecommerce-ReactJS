import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';



export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  

  useEffect(() => {

    const db = getFirestore();

    const consult = query(
      collection(db, "items"),
      where("categoryId", "==", `${categoryId}`)
    );

    const refCollection = categoryId ? consult : collection(db, "items");


    getDocs(refCollection).then((snapshot) => {
      if(snapshot.size == 0) {
        console.log("no results");
      } else {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data()};
          })
        );
      }
    })
      .finally(() => setLoading(false));

  }, [categoryId]);

  return  <ItemList products={products} loading={loading} />
  
};