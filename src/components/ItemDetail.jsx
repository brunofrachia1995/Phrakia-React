import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

 
export default function ItemDetail ({resultado}){
  
  const { id, category, nombre, precio, vacantes, imagen, description} = resultado
  const [unidades, setUnidades] = useState();

  function onAdd(contador){
    alert(`Se han agregado: ${contador} productos`);
    setUnidades(contador);
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="Phrakia"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link to={'/item/' + id}>Agregar al carrito</Link>
          </Button>
          <Button size="small">Finalizar mi compra
        {unidades > 0 ? <Link to={'/cart'}></Link> : <ItemCount maximo={vacantes} inicial={1} onAdd={onAdd} />}
      </Button>
        </CardActions>
      </Card>
      
    </div>
  )
}
