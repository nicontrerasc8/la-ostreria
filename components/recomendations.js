import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { DropInFromLeft } from '../animations'
import {motion} from "framer-motion"

const ArrOfRecomendations = [
    {
        r: "El ceviche de conchas negras con ostras estuvo buenazo, una combinación de sabores exquisita.",
        p: "Luis Pérez"
    },
    {
        r: "Fuí con mis amigos y les encantó el festival de ostras. Todo muy rico.",
        p: "Esteban Rodríguez"
    },
    {
        r: "Mi plato favorito fue las ostras al limón, buenazo. Una experiencia única.",
        p: "Jeffrey Villanueva1"
    },
]

const Recomendations = () => {

    const [Slide, setSlide] = useState(0)
  const SlidesLength = ArrOfRecomendations.length
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

  return <div className='section recomendations'>
    <h2 className='social-h2' style={{marginBottom:"20px"}}>Lo que dicen nuestros clientes</h2>
    <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
    >
        {
            ArrOfRecomendations.length && ArrOfRecomendations.map((data, idx) => {
                if(Slide === idx) return <motion.article key={idx}
                variants={DropInFromLeft} initial="hidden"
            animate="visible"
            exit="exit"
                >
                    <h3>&#8220;{data.r}&#8221;</h3>
              <span>{data.p}</span>
                </motion.article>
            })
        }
    </AnimatePresence>
  </div>
}

export default Recomendations