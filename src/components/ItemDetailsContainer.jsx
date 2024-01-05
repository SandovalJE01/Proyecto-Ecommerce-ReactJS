import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


import { Loading } from './Loading';
import { ItemDetail } from './ItemDetail';



export const ItemDetailsContainer = () => {

  const [productId, setProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore();

    const refDoc = doc(db, "items", `${id}`);

    getDoc(refDoc)
      .then((snapshot) =>{
      setProductId({id: snapshot.id,...snapshot.data()});
      })
      .finally(() => setLoading(false))

  }, [id]);

  
  return (
    <Container className="d-flex flex-wrap mt-3">
      {loading ? <Loading /> : <ItemDetail product={ productId } />}
    </Container>
  )
}