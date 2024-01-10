import React from 'react'
import {motion} from "framer-motion"
import { FaWaze } from 'react-icons/fa'

const Ubicacion = () => {
  return <motion.div 
  initial={{ opacity: 0, top: "-100px" }}
  viewport={{ once: true }}
  whileInView={{ opacity: 1, top: "0" }}
  transition={{delay: .5}}
  className='section'>
    <h2 className='simple-h2'>Nuestra ubicación</h2>
    <p>Jirón Inca 180, Surquillo, Lima.</p>
    <p>Atendemos de lunes a domingo de 12am a 5pm.</p>
    <a target={"_blank"} rel="noreferrer" href='https://ul.waze.com/ul?place=ChIJMx-EzHnJBZER55jBCjCk9Ao&ll=-12.11835170%2C-77.02039360&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
    <button className='waze-button'><FaWaze/> Ir con Waze</button>
    </a>
  </motion.div>
}

export default Ubicacion
