import React, { useState, useEffect } from 'react'
import Item from "./Item.jsx"
import {Route, useParams} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function ItemList({category}) {

    //estados
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    useEffect(() => {

        fetch('productos.json')
            .then((response) => response.json())
            .then((data) => {

                setTimeout(() => {

                    setLoading(false)
                    setResultado(data);

                }, 1500);
            })
            .catch((e) => {

            })
            .finally(() => {
                console.log("the end")
            })
    }, [])


    let filterResultado = []

    if (category != undefined){
        filterResultado = resultado.filter(number => number.category === category)
    } else {
        filterResultado = resultado
    }


    return (
        <>

            <div>{loading && "Loading courses..."}</div>
            <div>{error && "404 error..."}</div>

            

            <div>
                {filterResultado && (filterResultado.map((item) =>
                    <Item id={item.id} nombre={item.nombre} description={item.description} precio={item.precio} imagen={item.imagen} vacantes={item.vacantes} />
                ))}
            </div>


        </>
    )
}




