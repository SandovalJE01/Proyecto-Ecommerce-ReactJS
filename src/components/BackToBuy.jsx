import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import '../Styles/BackToBuy.css';

export const BackToBuy = () => {

  return (
    <div className="back-to-buy">
      <p>El carrito está vacío :( </p>
      <Link to={"/"}>
        <Button variant="dark">¡Volver a Comprar!</Button>
      </Link>
    </div>
  )
}