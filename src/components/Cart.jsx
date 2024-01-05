import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import { BackToBuy } from "./BackToBuy";
import { ItemsCart } from "./ItemsCart";


export const Cart = () => {
  const { items } = useContext(CartContext);

  if (!items.length) return <BackToBuy />
  
  return(
    
    <>
      <ItemsCart />
      <CheckOut />
    </>
  )
}