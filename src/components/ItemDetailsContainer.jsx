import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { productos } from "../data/productos";

export const ItemDetailsContainer = () => {
const [item, setitem] = useState(null);

const {id} = useParams ();

useEffect(() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000); 
    });

    promise
    .then((response) => {
            const filtros = response.find((item) => item.id === id);
            setItem(filtros);
    })
},[id]);

if (item) {
    return <>Loading</>
}

    return <div>
        <h1>{item.titulo}</h1>
    <img src={item.imgURL}/>
    <p>{item.descripcion}</p>
    </div>
}