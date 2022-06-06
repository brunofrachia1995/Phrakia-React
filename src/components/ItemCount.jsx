import React, { useState } from 'react'

const ItemCount = ({ inicial, max, onAdd }) => {

    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < max) {
        setCount(count + 1)
    } else{
        alert('No puedes agregar más productos al carrito')
    }


    }

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No puedes agregar más productos al carrito')
      }

      const reset = () => {
          setCount(inicial)
      }




  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , border: "1px solid red", height: "50px" }} >
<h2 style={{margin: "20px"}}>{count}</h2>
<button onClick={restar}>-</button>
<button onClick={sumar}>+</button>
<button onClick={() => {onAdd(count); reset() }}>Agregar al carrito</button>
{/* <button onClick={reset}>Reset</button> */}


    </div>
  )
}

export default ItemCount