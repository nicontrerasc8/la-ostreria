import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const Arr = [
    "/album/10.jpeg",
    "/album/11.jpeg",
    "/album/12.jpeg",
    "/album/13.jpeg",
    "/album/14.jpeg",
    "/album/15.jpeg",
]

const Images2 = () => {
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

export default Images2