import React from 'react'
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item.jsx';

export default function ItemDetailContainer() {

    const [itemDetail, itemDetailId] = useState()
    const {itemId } = useParams()
    

    useEffect(() => {

        fetch('productos.json')
            .then((response) => response.json())
            .then((data) => {itemDetailId(data.filter(producto => producto.id == itemId))})
            .catch((e) => {
                console.log("error")
            })
            .finally(() => {
                console.log("finalizó")
            })
    }, [itemId])


    return (
        <div>

            {itemDetail && (itemDetail.map((item) => 
                <ItemDetail id={item.id} title={item.nombre} description={item.description} precio={item.precio} imagen={item.imagen} vacantes={item.vacantes} />
            ))}

        </div>
    )
}
