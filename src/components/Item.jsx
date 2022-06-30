import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Item( { producto } ) {
  const { id, nombre, categoria, description, precio, imagen, vacantes } = producto;
  
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="Phrakia"
          categoria={categoria}
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
          <Link to = {'/item/'+ id}>Agregar al carrito</Link>
          </Button>
          <Link to={`/item/${id}`}>
            <Button size="small">Ver más</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

