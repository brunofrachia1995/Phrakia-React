import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'

function ItemListContainer({ bienvenida }) {

  const [fotos, setFotos] = useState([])

  useEffect(() => {

     fetch("https://picsum.photos/v2/list")

     .then(res => res.json())
     .then(res => setFotos(res))
     .catch(error => console.error("Error:", error))

  
    
  }, [])
  
  console.log(fotos)

  return (
    <>
    <h1>{bienvenida}</h1>
    <div>
      <ItemList fotos={fotos} />
    </div>
    </>
  )
}

export default ItemListContainer