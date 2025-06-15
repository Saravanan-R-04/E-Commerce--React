import React from 'react'
import './RelatedProduct.css'
import data from '../../Ecommerce_Frontend_Assets/data'
import Item from '../Components/Item.jsx' 
const RelatedProduct = () => {
  return (
   <>
   <br /><br/><br /><br/>     
    <center><h2>Related Products</h2></center>
    <br />
    <br />
    <div className='related-products'>
    {data.map((item,i)=>{
        return <Item key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
    })}
    </div>
   </>
  )
}

export default RelatedProduct