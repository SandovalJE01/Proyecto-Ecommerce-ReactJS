import { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ItemCount } from '../components/ItemCount';
import { CartContext } from "../contexts/CartContext";
import '../Styles/ItemDetail.css';

export const ItemDetail = ({ product }) => {

  const [added, setAdded] = useState(0);
  
  const {addItem} = useContext(CartContext);

  function onAdd(count) {
    setAdded(count);

    addItem(product, count);
  }

  return (
      
    <Card id="container-detail">
      <div id="image-container">
        <Card.Img src={product.imageUrl} className="image"/>
      </div>
      <div className="description-price">
        <div className="container-description">
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="description">{product.description}</Card.Text>
          <p className="stock">Stock: {product.stock}</p>
        </div>
        <div className="container-price">
          <p>$ {product.price}</p>
          {added == 0 && <ItemCount stock={product.stock} onAdd={onAdd} initial={1}/>}
          {added >= 1 && 
            <Link to={"/cart"}>
              <Button id="terminar-compra" variant="dark" >Finalizar Compra</Button>
            </Link>
          }
        </div>
      </div>
    </Card>
  )
}