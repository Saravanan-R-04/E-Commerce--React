import React from 'react'
import './Popular.css'
import data_product from '../../Ecommerce_Frontend_Assets/data'
import Item from './Item.jsx'
const Popular = () => {
  return (
    <div className='popular'>
        <br />
        <br />
        <br />
        <h2>Popular In Women</h2>
        <hr/>
        <div className='popular-item'>
            {data_product.map((data,i)=>{
                return <Item key="i" 
                    id={data.id}
                    name={data.name} 
                    image={data.image} 
                    old_price={data.old_price}
                    new_price={data.new_price}
            />})} 
        </div>
    </div>
  )
}

export default Popular