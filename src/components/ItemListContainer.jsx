import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


export default function ItemListContainer() {

  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, 'items');
    

    if (id) {
      const q = query(productosCollection, where('categoria', '==', id));

      getDocs(q)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
      }
      ).catch(error => {
        setError(error);
      });
    } else {
      getDocs(productosCollection)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
        );
    }
    ).catch(error => {
      setError(error);
    });
  }
  }, [id]);

 
  

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}
