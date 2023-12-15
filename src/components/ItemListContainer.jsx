import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import { itemList } from "./ItemList";
import { productos } from "../data/productos";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000); 
        });

        promise
        .then((response) => {
            setItems(response);
        })
        .finally(() => setLoading(false));

    },[]);

    return (
    <Container className="mt-4">
        <h1>Lista</h1>
        <itemList items={items} />
    </Container>
    );
};