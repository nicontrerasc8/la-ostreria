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
    <p>Calle Santa Rosa 131, Surquillo, Lima.</p>
    <a target={"_blank"} rel="noreferrer" href='https://ul.waze.com/ul?place=ChIJF_b7dRDIBZERou1BcggIkIM&ll=-12.11872050%2C-77.02366760&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
    <button className='waze-button'><FaWaze/> Ir con Waze</button>
    </a>
    <p style={{marginTop: "calc(1rem + 10px)"}}>Calle Cabo Blanco Mzna B, Lote 3, Punta Hermosa</p>
    <a target={"_blank"} rel="noreferrer" href='https://ul.waze.com/ul?place=EiZDYWJvIEJsYW5jbywgUHVudGEgSGVybW9zYSAxNTg0NiwgUGVydSIuKiwKFAoSCYNGl6-CogWREQnMP_xpvehfEhQKEgnH_qG5OpcFkRFm2KOV5RwLcQ&ll=-12.33416300%2C-76.82667970&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
    <button className='waze-button'><FaWaze/> Ir con Waze</button>
    </a>
  </motion.div>
}

export default Ubicacion
