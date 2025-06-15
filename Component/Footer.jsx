import React from 'react';
import './Footer.css';
import Logo from '../../Ecommerce_Frontend_Assets/logo.png';
import Instagram from '../../Ecommerce_Frontend_Assets/instagram_icon.png';
import Pinterest from '../../Ecommerce_Frontend_Assets/pintester_icon.png';
import Whatsapp from '../../Ecommerce_Frontend_Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <center>
          <div className="footer-top">
        <div className="footer-logo">
            <center>
                <img src={Logo} alt="Logo" style={{marginLeft:"100px"}}/>
            </center>
        </div>
        <br />
        <br />
        <div className="footer-links">
          <h5>Company</h5>
          <h5>Offers</h5>
          <h5>Products</h5>
          <h5>About</h5>
          <h5>Contact</h5>
        </div>
        <br />
        <br />
        <center>
        <div className="footer-icons">
          <img src={Instagram} alt="Instagram" style={{marginLeft:"170px"}}/>
          <img src={Pinterest} alt="Pinterest"  style={{marginLeft:"20px"}} />
          <img src={Whatsapp} alt="WhatsApp"  style={{marginLeft:"20px"}}/>
        </div>
        </center>
        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopper. All rights reserved.</p>
      </div>
      </center>
    </div>
  );
};

export default Footer;
