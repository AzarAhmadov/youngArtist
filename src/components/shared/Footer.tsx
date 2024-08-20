import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";




const Footer = () => {
  return (
   <>
        <div className="border-t bg-black text-white pb-32 pt-10 text-center mt-10">
        <div className="flex flex-wrap justify-evenly align-item-center">
          <div>
            <h4>Young Artists Hub</h4>
          </div>
          <div>
            <h5>Digər linklər</h5>
            <ul>
              <li>Ana səhifə</li>
              <li>Haqqımızda</li>
              <li>Əlaqə</li>
            </ul>
          </div>
          <div>
            <h5>Bizimlə əlaqə</h5>
            <ul>
              <li>+(994)709985865</li>
              <li>theyoungh@gmail.com</li>
            </ul>
          </div>
          <div>
            <h5>Bizi izləyin</h5>
            <ul className="flex ">
              <li className=""><FaFacebookF /></li>
              <li><FaInstagram /></li>
              <li><FaTelegramPlane /></li>
              <li><FaYoutube /></li>
            </ul>
          </div>
        </div>
      </div>
   </>
  )
}

export default Footer