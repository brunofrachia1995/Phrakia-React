import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Cart() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      marginTop: 15,
      gap: 4,
    }}>

      <ShoppingBasketIcon
        color='primary'
        sx={{ fontSize: '90px', margin: 'auto' }}
      />

      <Typography variant='h4'>No tenés ningún ítem en el carrito</Typography>

      <Link
        className='button-link'
        to='/'
        style={{ alignSelf: 'flex-start', margin: 'auto' }}
      >
        Volvé a la tienda
      </Link>

    </Box>
  )
}
