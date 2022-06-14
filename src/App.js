import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
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
    <Route path="/" element={ <Home/> } />
    {/* <ItemListContainer bienvenida={'Bienvenidos a PHRAKIA, empecemos a hacer fotografías y dejar de sacar fotos'} /> */}
    <Route path="/Foto/:id" element={ <ItemDetailContainer /> } />
    </Routes>
    </BrowserRouter>
    </>
    
  );
} 

export default App;
