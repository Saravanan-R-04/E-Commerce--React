import React from 'react'
import './NewsLetter.css'
import Footer from './Footer'
const NewsLetter = () => {
  return (
    <>
    <div className='news-letter'>
    <br />
        <center>
            <h2 className='ge'>Get Exclusive Offers On Your Email</h2>
            <br />
            <h5>Subscribe to our newsletter and stay updated</h5>
            <input placeholder='Enter Your Email Here'/>
            <button className='sub'>Subscribe</button>
        </center>
        <br />
   </div>
   <Footer/>
    </>
   
  )
}

export default NewsLetter