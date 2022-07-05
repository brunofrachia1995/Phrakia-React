import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import MuiNavbar from './components/MuiNavBar';
import Cart from './components/Cart';
import CartProvider from './components/context/CartContext';
import { initializeApp } from "firebase/app";
import ItemListContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';


initializeApp({
  apiKey: "AIzaSyDbnBy4aQMV4ggBgn-OkeqyVB4NxYIpi5M",
  authDomain: "phrakia---photography-school.firebaseapp.com",
  projectId: "phrakia---photography-school",
  storageBucket: "phrakia---photography-school.appspot.com",
  messagingSenderId: "165473050854",
  appId: "1:165473050854:web:9a565befb3e724affd9b27"
});



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
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/category/:id" element={<ItemListContainer category_id={"XOnugTqWGiTfT0Q0B2QH"} />} />

          <Route path="/cart" element={<Cart/>} />

          <Route path="/checkout" element={ <Checkout/> } />

        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
