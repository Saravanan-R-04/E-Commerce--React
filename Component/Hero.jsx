import React from 'react'
import './Hero.css'
import HeroImg from '../../Ecommerce_Frontend_Assets/hero_image.png'
import HandIcon from '../../Ecommerce_Frontend_Assets/hand_icon.png'
const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
                <h4 >NEW ARRIVALS ONLY</h4>
                <h1 className='nao'>new
                    <img src={HandIcon} style={{width:"70px",height:"70px",marginBottom:"25px",marginLeft:"10px"}}/></h1>
                <h1 className='nao2'>collections</h1>
                <h1 className='nao3'>for everyone</h1>
                <button>Latest Collections</button>
            </div>
            <div className='hero-right'>
                <img className="img" src={HeroImg} width={"300px"} height={"400px"}/>
            </div>
        </div>
    </>
  )
}

export default Hero