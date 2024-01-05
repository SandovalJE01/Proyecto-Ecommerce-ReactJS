import { MyItem } from "./Item";
import { Loading } from "./Loading";
import '../Styles/ItemList.css';


export const ItemList = ({ products, loading }) => {
    
  return (
    <div className="products-container">
      { loading ? (
        <Loading />
      ) : (
        products.map(product => (
        <MyItem 
          key={product.id}
          product={product}
        />)
      ))}
    </div>
  )
}