import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MuiNavbar from './components/MuiNavBar';





function App() {

  /*         const [carrito, setCarrito] = useState(0);
      
          const sumarCarrito = (cantidad) => {
            setCarrito(carrito + cantidad)
          }
   */
  return (

    <>
      <BrowserRouter>
        <MuiNavbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="/category/cursos" element={<ItemListContainer category={"cursos"} />} />

          <Route path="/category/carreras" element={<ItemListContainer category={"carreras"} />} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
