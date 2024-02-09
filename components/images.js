import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const Arr = [
    "/album/1.jpg",
    "/album/2.jpg",
    "/album/3.jpg",
    "/album/4.jpg",
    "/album/5.jpg",
    "/album/6.jpg",
    "/album/7.jpg",
    "/album/8.jpg",
    "/album/9.jpg",
]

const Images = () => {
  return <div className='notas'>
    <h2>
        Fotos destacadas
    </h2>
    <section className='image-grid'>
        {
            Arr.length && Arr.map((info,idx) => {
                return <motion.div 
                viewport={{once: true}}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5}}
                key={idx}>
                    <Image src={info} alt="El pez nuestro de cada día" layout='fill'/>
                </motion.div>
            })
        }
    </section>
  </div>
}

export default Images