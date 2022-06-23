import React from 'react'

export default function Cart({ nombre, id, cantidad, imagen, precio, deleteItem }) {
  return (
    <>
    <div> 
      <h1>Carrito</h1>
      <div>
        <p><span>Precio:</span> {precio}</p>
        <p><span>Productos Agregados:</span> {cantidad}</p>
        <button onClick={()=>{deleteItem(id)}}> Eliminar Carrera/Curso</button>
      </div>
    </div>
</>
  )
}