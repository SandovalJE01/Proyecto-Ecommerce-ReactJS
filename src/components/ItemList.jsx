import Container from "react-bootstrap/Container";

import { Item } from "./Item";

export const itemList = ({ items }) => {

    return <Container>
    {items.map(item => <item item={item}/>
    )}
    </Container>
}