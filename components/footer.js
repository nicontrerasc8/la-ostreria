import React from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
  return <footer>
    <div className="nav-btns">
      <a href='https://www.facebook.com/elpeznuestrodecadadia' target={"_blank"} rel="noreferrer">
      <button className='btn-nav'>
          <FaFacebook/>
        </button>
      </a>
      <a href='https://www.instagram.com/elpeznuestrodecadadia/' target={"_blank"} rel="noreferrer">
        <button className='btn-nav'>
            <FaInstagram/>
        </button>
      </a>
      {/* <a href={`https://api.whatsapp.com/send?phone=51995638935&text=¡Hola! vengo de su página web.`}  target={"_blank"} rel="noreferrer">
        <button className='btn-nav'>
          <FaWhatsapp/>
        </button>
      </a> */}
          </div> 
  </footer>
}

export default Footer