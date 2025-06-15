import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './ShopContext'
import remove_icon from '../../../Ecommerce_Frontend_Assets/cart_cross_icon.png'
import './CartItem.css'
const CartItems = () => {
    const{getTotalCartAmount,data_product,cartitems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
         <hr  style={{ border: "none", height: "3px", backgroundColor: "black" }}/>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
      <hr style={{ border: "none", height: "3px", backgroundColor: "black" }} />
        {data_product.map((e)=>{
            if(cartitems[e.id]>0)
            {
                return <div>
                            <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} className='carticon-product-icon'/>
                            <p>{e.name.slice(0,20)}</p>
                            <p>${e.new_price}</p>
                            <p>{cartitems[e.id]}</p>
                            <p>{e.new_price*cartitems[e.id]}</p>
                            <img src={remove_icon} className="remove_icon" style={{cursor:"pointer"}} onClick={()=>{removeFromCart(e.id)}}/>
                            </div>
                            <hr style={{ border: "none", height: "3px", backgroundColor: "black" }} />
                        </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h3>Cart Totals</h3>
                <div className='cartitems-total-item1'>
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                    <hr style={{ border: "none", height: "3px", backgroundColor: "black" }} />
                </div>
                <div className='cartitems-total-item2'>
                    <p>Shipping Fee</p>
                    <p className='free'>Free</p>
                </div>
                  <div className='cartitems-total-item3'>
                    <h3>Total</h3>
                    <h3 className='free'>${getTotalCartAmount()}</h3>
                </div>
                <button>Proceed To Check Out</button>
            </div>
            <div className='promo'>
                <b><p>If you have promo code. Enter here</p></b>
                <input type="text" placeholder='Enter promo code here'/>
                <br />
                <button style={{marginTop:"20px"}}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems