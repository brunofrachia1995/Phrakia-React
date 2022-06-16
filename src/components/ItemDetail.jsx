import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function ItemDetail({id, nombre, description, precio, imagen, vacantes}) {
  return (
      <div>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Agregar a carrito</Button>
          <Button size="small">Ver más</Button>
        </CardActions>
      </Card>
      </div>
  )
}
