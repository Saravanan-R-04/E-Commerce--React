import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../Ecommerce_Frontend_Assets/star_icon.png'
import star_dull_icon from '../../Ecommerce_Frontend_Assets/star_dull_icon.png'
import RelatedProduct from './RelatedProduct'
import { ShopContext } from './Context/ShopContext'
const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext)
  return (
    <>  
        <div className='product-display'>
        <div className='product-display-left'>
            <img src={product.image} className='pd-img'/>
            <br />
            <br />
            <img src={product.image} className='pd-img'/>
            <br />
            <br />
            <img src={product.image} className='pd-img'/>
            <br />
            <br />
            <img src={product.image} className='pd-img'/>
            <br />
            <br />
        </div>
        <div className='product-display-right'>
            <img src={product.image} className='main-img'/>
        </div>
        <div details>
            <p style={{marginTop:"25px",marginLeft:"40px",fontSize:"30px",fontWeight:"600",wordSpacing:"5px",width:"490px"}}>{product.name}</p>
        </div>
        <br />
        <br />
        <div>
            <div className='rating'>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
            </div>

            <div className='prices'>
                <h4 style={{marginTop:"20px",color:"red"}}>${product.new_price}</h4>
                <h4 style={{textDecoration:"line-through",color:"grey",marginLeft:"20px",marginTop:"20px"}}>${product.old_price}</h4>
                <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, odit quasi. Minus illo repellat ducimus at amet soluta labore iste accusamus </p>
                <h5 className='size'>Select Size</h5>
                <div className='sizes'>
                    <div className='S'><h4>S</h4></div>
                    <div className='S'><h4>M</h4></div>
                    <div className='S'><h4>L</h4></div>
                    <div className='S'><h4>XL</h4></div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='add'>Add To Cart</button>
           
        </div>
    </div>
    <RelatedProduct/>
    </>
  )
}

export default ProductDisplay