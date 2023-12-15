import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

import { ItemList } from "./ItemList";
import { productos } from "../data/productos";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams ();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000); 
        });

        promise
        .then((response) => {
            if (id) {
                const filtros = response.filter((item) => item.category === id);
                setItems(filtros);
            } else {
                setItems(response);
            }

        })
        .finally(() => setLoading(false));

    },[id]);

    return (
    <Container className="mt-4">
        <h1>Lista</h1>
        <ItemList items={items} />
    </Container>
    );
};