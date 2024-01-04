// import { Button } from "react-bootstrap";
// import { useContext, useState } from "react";
// //import { getFirestore, collection, addDoc } from "firebase/firestore";
// import moment from "moment";

// import { CartContext } from "../contexts/CartContext";
// import { CheckOut } from "../Styles/CheckOut.css";

// const clearBuyer = {name: "", phone: "", email: ""};

// const fechaYHora = moment();
// const fechaCompra = fechaYHora.format("DD-MM-YYYY");
// const horaCompra = fechaYHora.format("HH:mm:ss");

// const date = { fecha: fechaCompra, hora: horaCompra };

// export const CheckOut = () => {
//   const [buyer, setBuyer] = useState(clearBuyer);
//   const { items, clear } = useContext(CartContext);

//   const total = items.reduce((acumulado, actual) => {
//     return acumulado + actual.price * actual.quantity
//   }, 0);

//   const handleSendOrder = (e) => {
//     e.preventDefault();

//     const order = { buyer, items, date, total };

//     const db = getFirestore();
    
//     const orderCollection = collection(db, "orders");
    
//     addDoc(orderCollection, order).then(({id}) => {
//       if (id) {
//         alert(`Su orden: ${id} ha sido completada!`);
//       }
//     }).finally(() => {setBuyer(clearBuyer), clear()});

//   };
  
//   const handleChange = (ev) => {
//     const {name, value} = ev.target;

//     setBuyer(prev => {
//       return{...prev, [name]: value};
//     });

//   }

//   return (
//     <div className="form-container">
//       <h2 className="subtitle">Datos del Comprador</h2>
//       <form className="form" onSubmit={(e) => handleSendOrder(e)}>
        
//         <div className="input-container">
//           <label className="field-name">Nombre</label>
          
//           <input name="name" className="input" 
//           type="text" value={buyer.name} 
//           onChange={handleChange} required />

//         </div>

//         <div className="input-container">
//           <label className="field-name">Teléfono</label>
          
//           <input name="phone" className="input" 
//           type="text" value={buyer.phone} 
//           onChange={handleChange} required />

//         </div>

//         <div className="input-container">
//           <label className="field-name">Email</label>
          
//           <input name="email" className="input input-email" 
//           type="email" value={buyer.email} 
//           onChange={handleChange} required />

//         </div>

//         <div className="button-container">
//           <Button type="submit" className="submit" variant="dark" >Enviar</Button>
//         </div>
//       </form>
//     </div>
//   )
// }