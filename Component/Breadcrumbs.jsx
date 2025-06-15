import React from 'react'
import arrow_icon from '../../Ecommerce_Frontend_Assets/breadcrum_arrow.png';
import './Breadcrumbs.css'
const Breadcrumbs = (props) => {
    const {product}=props;
  return (
    <div className='bread-crum'>
        HOME <img src={arrow_icon}/>
        SHOP <img src={arrow_icon}/>
        {product.category} <img src={arrow_icon}/>
        {product.name} <img src={arrow_icon}/>
    </div>
  )
}
export default Breadcrumbs