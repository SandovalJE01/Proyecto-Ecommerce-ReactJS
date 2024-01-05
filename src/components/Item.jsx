import { Card, Button, CardFooter } from "react-bootstrap";

import "../Styles/Item.css";
import { Link } from "react-router-dom";

export const MyItem = ({product}) => {
    
  return (
    <Card id="card">
      <Card.Img 
        variant="top"
        src={product.imageUrl}
        className="image"
      />
      <Card.Body>
        <Card.Title>
          {product.title}
        </Card.Title>
        <CardFooter id="button-container">
          <Link to={`/products/${product.id}`}>
            <Button variant="dark">Ver</Button>
          </Link>
          <p className="price">$ {product.price}</p>
        </CardFooter>
      </Card.Body>
    </Card>
  )
}
