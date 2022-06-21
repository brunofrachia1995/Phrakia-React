import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Categorias() {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Link to='/category/cursos' category={"cursos"}>
          <Button>Cursos</Button>
        </Link>
        <Link to={'/category/carreras'}>
          <Button>Carreras</Button>
        </Link>
      </ButtonGroup>
    </>
  );
}

export default Categorias;
