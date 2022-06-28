import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MuiNavbar from './components/MuiNavBar';
import Cart from './components/Cart';
import ItemList from './components/ItemList';
import CartProvider from './components/context/CartContext';





function App() {

  /*         const [carrito, setCarrito] = useState(0);
      
          const sumarCarrito = (cantidad) => {
            setCarrito(carrito + cantidad)
          }
   */
  return (

    <>
      <BrowserRouter>
      <CartProvider>
        <MuiNavbar />
        <Routes>
          <Route path="/" element={<ItemList />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/category/:category" element={<ItemList />} />

          

          <Route path="/cart" element={<Cart/>} />

        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
