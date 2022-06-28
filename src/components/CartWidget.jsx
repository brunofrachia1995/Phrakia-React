import React from 'react'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function CartWidget({ }) {
  return (
    <Button
      variant='notBg'
    >
      <ShoppingBasketIcon />
    
    </Button>
  )
}
