import { Button } from "react-bootstrap";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import'../stylesheets/ItemsCart.css';

export const ItemsCart = () => {

  const {items, removeItem, clear} = useContext(CartContext);

  const total = items.reduce((acumulado, actual) => {
    return acumulado + actual.price * actual.quantity;
  },0)

  return(

    <div className="item-buyer-container">
      {items.map((item) => (
        <div key={item.id} className="item-buyer">
          
          <div className="image-container">
            <img src={item.pictureUrl} alt={item.title} className="image"/>
          </div>

          <div className="data-container">
            <h1>{item.title}</h1>
            <div className="numbers-container">
              <div>
                <p>Precio por unidad</p>
                <p>$ {item.price}</p>
              </div>
              <div>
                <p>Cantidad</p>
                <p>{item.quantity}</p>
              </div>
            </div>

            <div className="total-product">
              <p>Total producto:</p>
              <p>$ {item.price*item.quantity}</p>
            </div>
          </div>

          <div className="button-container">
            <Button onClick={() => removeItem(item.id)} variant="dark" className="button-x">x</Button>
          </div>

        </div>
      ))}

      <div className="items-down-container">
        <Button onClick={clear} variant="dark" className="button-empty-cart">Vaciar Carrito</Button>
        <p>Total compra: $ {total}</p>
      </div>

    </div>
  )
}