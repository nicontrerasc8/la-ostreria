import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { DropInFromBottom, DropInFromTop } from '../animations'
import Link from 'next/link'


const ImageArray = [
  "/back1.png", "/back2.png"
]


const Slider = () => {
    const [Slide, setSlide] = useState(0)
    const SlidesLength = ImageArray.length
    const timeout = useRef(null)
  
    useEffect(() => {
      const NextSlide = () => {
        setSlide(Slide => (Slide=== SlidesLength - 1 ? 0 : Slide+1))
      }
      timeout.current = setTimeout(NextSlide, 8000);
  
      return function(){
        if(timeout.current) clearTimeout(timeout.current)
      }
  
    }, [Slide, SlidesLength])

  return  <div className='slider'>
  <motion.section 
  initial={{ opacity: 0 }}
  viewport={{ once: true }}
  whileInView={{ opacity: 1 }}
  transition={{delay: .5}} className='slider-header'>
    <div>
    <h2>Lo mejor de la gastronomía norteña en un solo lugar</h2>
    <a href={`https://api.whatsapp.com/send?phone=51995638935&text=¡Hola! vengo de su página web. Me gustaría hacer una reserva.`} target={"_blank"} rel="noreferrer">
          <button className='button'>
      Quiero hacer una reserva
    </button>
    </a>
    </div>
  </motion.section>
  {
    ImageArray && ImageArray.map((img, idx) => {
      if(Slide === idx) return <div className='img-slide' key={idx}>
        <Image src={img} alt="Cevichería El Picante" fill/>
      </div>
    })
  }
</div>
}

export default Slider