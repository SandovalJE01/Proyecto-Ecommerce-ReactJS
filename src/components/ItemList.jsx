import Container from "react-bootstrap/Container";

import { Item } from "./Item";

export const ItemList = ({ items }) => {

    return (
    <Container className="d-flex">
            {items.map((item) => (
            <Item key={item.id} item={item}/>
    ))}
    </Container>
    );
};