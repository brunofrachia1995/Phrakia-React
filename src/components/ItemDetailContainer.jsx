import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then(res => res.json()) 
            .then(fotos => { setItemDetail(fotos.find(foto => foto.id == id)) })
            .catch(error => console.error("Error", error))
        console.log(itemDetail)
    }, [id]);

    return (
        <>
            <ItemDetail id={itemDetail.id} title={itemDetail.author} img={itemDetail.download_url} />
        </>
    );
};

export default ItemDetailContainer;