import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Categorias() {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group">

        <Button href="/">Estudiantes</Button>
        <Button href="/">Profesores</Button>
        <Button href="/">Comunidad</Button>
      </ButtonGroup>
    </>
  );
}


export default Categorias;
