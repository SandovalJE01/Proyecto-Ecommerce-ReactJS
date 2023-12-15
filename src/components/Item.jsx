import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
    return (    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.imgURL} />
    <Card.Body>
      <Card.Title>{item.titulo}</Card.Title>
      <Card.Text>{item.descripcion}</Card.Text>
      <Link to={"/item/${item.id}"}>
        <Button variant="primary">Go somewhere</Button>
        </Link>
    </Card.Body>
  </Card>
  );
};
