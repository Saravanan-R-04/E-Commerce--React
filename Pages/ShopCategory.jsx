import React from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import { useContext } from 'react'
import './ShopCategory.css'
import dropdown from '../../Ecommerce_Frontend_Assets/dropdown_icon.png'
import Item from '../Components/Item'
import Footer from '../Components/Footer'
const ShopCategory = (props) => {
  const {data_product}=useContext(ShopContext);
  return (
    <div>
        <img src={props.banner} className='banner'/>
        <div style={{display:"flex"}}>
            <div className='shopcategory-indexSort'>
            <b><p className='span'>Showing 12 out of 36</p></b>
        </div>
        <div className='shopcategory-sort'>
          <b className='img'>Sort by <img src={dropdown} /></b>
        </div>
        </div>
        <div className='shopcategory-item'>
        {data_product.map((item,i)=>{
          if(props.category===item.category)
          {
            return (
              <Item 
                  key={i} 
                  name={item.name} 
                  image={item.image} 
                  old_price={item.old_price} 
                  new_price={item.new_price} 
                  id={item.id}
              />
            )
          }
          else
          {
            return null;
          }
        })}
        </div>
       
    </div>
  )
}

export default ShopCategory