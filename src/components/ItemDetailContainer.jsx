import React from 'react'
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item.jsx';

export default function ItemDetailContainer() {

    const [resultado, setResultado] = useState({})
    const { itemId } = useParams()


    useEffect(() => {

        fetch('productos.json')
            .then((response) => response.json())
            .then((data) => setResultado(data.find(product => product.id === itemId)))
            .catch((e) => {
                console.log("error")
            })
            .finally(() => {
                console.log("finalizó")
            })
    }, [])


    return (
        <div>


            <ItemDetail resultado={resultado} />

        </div>
    )
}
