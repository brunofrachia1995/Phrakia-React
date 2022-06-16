import React from 'react'
import ItemList from "./ItemList.jsx"

export default function ItemListContainer({ category }) {
    return (
        <div>

            <h1>Bienvenidos a PHRAKIA, empezá a hacer fotografías y dejá de sacar fotos</h1>
            <div>
                <ItemList category={category} />
            </div>

        </div>
    )
}