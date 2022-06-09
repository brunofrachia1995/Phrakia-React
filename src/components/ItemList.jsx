import React from 'react'
import Item from './Item'

const ItemList = ({fotos}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
          {fotos.map(foto => <Item key={foto.id} foto={foto} /> )}

    </div>
  )
}

export default ItemList
