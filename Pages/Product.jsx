import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs.jsx';
import ProductDisplay from '../Components/ProductDisplay.jsx';
const Product = () => {
  const {data_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=data_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
export default Product