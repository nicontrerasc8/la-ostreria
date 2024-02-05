import React, { useState } from 'react'
import { FaCross, FaTimes } from 'react-icons/fa'
import BackDrop from './backdrop'
import {motion} from "framer-motion"
import { DropInFromLeft, DropInFromTop } from '../animations'

const Video = ({isOn, out, url}) => {

  return <BackDrop isOn={isOn} onClick={out}>
    <motion.div className='video-source'
        initial={{ y: "-100vh" }}
        animate={{y : 0}}
        exit={{y: "100vh"}}
     
    >
    <iframe src={url}
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen/>
         <button className='btn-nav'>
                <FaTimes/> Cerrar vídeo
             </button>        
  </motion.div>
  </BackDrop>
}

export default Video