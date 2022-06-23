import React from 'react'
import {createContext, useState } from "react";


export const CartContext = createContext({});

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega producto al cart evitando la repetición
  const addItem = (item, count) => {
    const newItem = {
      ...item,
      count,
    };

    if (inCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].count += count;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Chequea si el producto ya está en el cart - TRUE / FALSE
  const inCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  // Vacia el cart
  const emptyCart = () => {
    setCart([]);
  };

  // Elimina un producto del cart
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  // Cantidad de un producto en el cart
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.cantidad), 0);
  };

  // Retorna el precio
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.precio * item.cantidad), 0);
  };

  return (
    <CartContext.Provider value={{ cart, inCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}> { children } </CartContext.Provider>  );
};

export default MyProvider;