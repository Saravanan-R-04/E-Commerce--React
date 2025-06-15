import './Offers.css'
import React from 'react'
import ei from '../../Ecommerce_Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <b>
                <h1 className='e'>EXCLUSIVE</h1>
                <h1 className='ofy'>OFFERS FOR YOU!!!</h1>
            </b>
            <h6 className='o'>ONLY ON BEST SELLERS PRODUCT</h6>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img className='ei' src={ei}/>
        </div>
    </div>
  )
}

export default Offers