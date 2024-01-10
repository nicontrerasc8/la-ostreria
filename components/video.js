import React, { useState } from 'react'
import { FaCross, FaTimes } from 'react-icons/fa'
import BackDrop from './backdrop'
import {motion} from "framer-motion"
import { DropInFromLeft, DropInFromTop } from '../animations'

const Video = ({isOn, out}) => {

  return <BackDrop isOn={isOn} onClick={out}>
    <motion.div className='video-source'
        initial={{ y: "-100vh" }}
        animate={{y : 0}}
        exit={{y: "100vh"}}
     
    >
    <button className='btn-nav'>
                <FaTimes/> Cerrar vídeo
             </button>
    <iframe src="https://www.youtube.com/embed/rrRRLVV2f2Y" 
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen/>
             
  </motion.div>
  </BackDrop>
}

export default Video