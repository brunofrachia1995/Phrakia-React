import React, { useState, useEffect } from 'react'
import Item from "./Item.jsx"
import {Route, useParams} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function ItemList() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);
    const {category} = useParams ()
    useEffect(() => {

        fetch('productos.json')
            .then((response) => response.json())
            .then((data) => {

                if (category){
                    setResultado(data.filter(product=> product.category === category) )
                }
                else {setResultado (data)}
            })
            .catch((e) => {
            console.log(e)
            })
            .finally(() => {
                console.log("the end")
            })
    }, [category])

    console.log(category)
    console.log(resultado)



    return (
        <>

            {/* <div>{loading && "Loading courses..."}</div>
            <div>{error && "404 error..."}</div> */}

            

            <div>
                { resultado.map((item) =>
                    <Item id={item.id} nombre={item.nombre} description={item.description} category={item.category} precio={item.precio} imagen={item.imagen} vacantes={item.vacantes} />
                )}
            </div>


        </>
    )
}




