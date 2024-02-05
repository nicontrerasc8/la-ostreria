import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFish, FaVideo } from 'react-icons/fa'
import Video from './video'
import {motion} from "framer-motion"

const Header = () => {

    const [VideoOn, setVideoOn] = useState(false)


  return <>
        <Video isOn={VideoOn} out={() => setVideoOn(false)} url={"https://www.youtube.com/embed/rrRRLVV2f2Y" }/>
        <header>
    <section>
        <h2>
            Deleita tu paladar con lo mejor del mar peruano
        </h2>
        <p>Somos cocineros innovadores y creativos. Desde nuestro local en Surquillo, impulsamos el consumo de ostras, un alimento delicioso y accesible.</p>
        <button className='btn-nav' onClick={() => setVideoOn(true)}>
            <FaVideo/> La ruta de la ostra en el Perú
        </button>
    </section>
    <motion.article
    transition={{delay: .5}}
    viewport={{once: true}}
    initial={{ x: 100, opacity: 0}}
    animate={{ x: 0, opacity: 1 }}
    exit={{x: 100}}
    >
        <Image src={"/ostras.jpg"} fill alt="Si"/>
    </motion.article>
  </header>
  <div class="custom-shape-divider-bottom-1675367814">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
  </>
  
}

export default Header