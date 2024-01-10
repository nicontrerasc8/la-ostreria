import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { DropInFromLeft } from '../animations'
import Link from 'next/link'
import {MdMenuBook} from "react-icons/md"

const ImageArray = [
    "/ostras2.jpg", "/ostras3.jpg", "/ostras4.jpg"
  ]

const OurKitchen = () => {

  const [Slide, setSlide] = useState(0)
    const SlidesLength = ImageArray.length
    const timeout = useRef(null)
  
    useEffect(() => {
      const NextSlide = () => {
        setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
      }
      timeout.current = setTimeout(NextSlide, 5000);
  
      return function(){
        if(timeout.current) clearTimeout(timeout.current)
      }
  
    }, [Slide, SlidesLength])

  return <>
    <header className='reverse-header'>
  <section>
  {
    ImageArray && ImageArray.map((img, idx) => {
      if(Slide === idx) return <motion.article 
      initial={{ x: -100, opacity: 0}}
  animate={{ x: 0, opacity: 1 }}
  exit={{x: -100}}
  viewport={{ once: true }}
      key={idx}>
        <Image 
      key={idx} src={img} 
      alt="El pez nuestro de cada día" fill/>
      </motion.article>
    })
  }
  </section>
  <section>
      <h2>
          Una sazón <strong>diferente</strong>.
      </h2>
      <p>
        Cocinamos con personalidad y alegría. Nuestra carta está hecha para todos los gustos, desde un cebiche tradicional bien aderezado hasta unas deliciosas ostras a la parrilla.
      </p>
      <Link href={"/carta-online"}>
        <button className='btn-nav'>
          <MdMenuBook/> Nuestro menú
        </button>
      </Link>
  </section>
</header>
<div class="custom-shape-divider-bottom-1675369098">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
  </>
}

export default OurKitchen