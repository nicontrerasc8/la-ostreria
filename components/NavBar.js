import React, { useEffect } from 'react'
import { Nav } from '../styled-components/nav'
import Image from 'next/image'
import {motion} from "framer-motion"
import Link from 'next/link'
import { useState } from 'react'
import {FaWineBottle, FaShoppingCart, FaBoxOpen, FaPizzaSlice, FaInstagram, FaFacebook, FaWhatsapp, FaTimes} from "react-icons/fa"
import {IoWine} from "react-icons/io5"
import {GiCirclingFish, GiHamburgerMenu} from "react-icons/gi"
import UseCartContext from '../context/context'
import BackDrop from './backdrop'
import { useRouter } from 'next/router'



const BrandNavBar = () => {

    const [OpenNav, setOpenNav] = useState(false)
     const ChangeNavigationValue = () => setOpenNav(!OpenNav)
     const [String, setString] = useState("")
     const [NavActiveColor, setNavActiveColor] = useState(false);
     const {ProductsCount} = UseCartContext()
     const router = useRouter()

     const ChangeRoute = (route) => {
      router.push(route)
      setOpenNav(false)
     }
    

     useEffect(()=>{
          const HandleScroll = () => {
               setNavActiveColor(window.scrollY > 1)
          }
          window.addEventListener("scroll", HandleScroll)
    
          return () => {
              window.removeEventListener("scroll", HandleScroll)
          }
      }, [])

  return <>
    <nav className={NavActiveColor ? "solidBack" : ""}>
      <Link href={"/"}>
        <h2>La ostrería</h2>
      </Link>
      <div className="nav-btns">
      <Link href={"/"}>
      <button className='btn-nav'>
          Inicio
        </button>
      </Link>
      <Link href={"/carta-online"}>
      <button className='btn-nav'>
          Carta
        </button>
      </Link>
      <Link href={"/notas-periodisticas"}>
      <button className='btn-nav'>
            Notas periodísticas
        </button>
      </Link>
      <Link href={"/fotos"}>
      <button className='btn-nav'>
            Fotos destacadas
        </button>
      </Link>
          </div> 
          <button className='hamburger' onClick={ChangeNavigationValue}>
            {OpenNav ? <FaTimes/> : <GiHamburgerMenu/>}
          </button>
  </nav>
  <BackDrop onClick={ChangeNavigationValue} isOn={OpenNav}>
  <motion.div className='btn-toggle-nav'
               onClick={(e) => e.stopPropagation()}
               initial="hidden"
               animate="visible"
               exit="exit"
          >
                    <button className='btn-nav' onClick={() => ChangeRoute("/")}>
                            Inicio
                    </button>
                    <button className='btn-nav' onClick={() => ChangeRoute("/carta-online")}>
                            Carta
                    </button>
                    <button className='btn-nav' onClick={() => ChangeRoute("/notas-periodisticas")}>
                            Notas periodísticas
                    </button>
                    <button className='btn-nav' onClick={() => ChangeRoute("/fotos")}>
                            Fotos destacadas
                    </button>
                    <div className='nav-btns'>
                    <a href='https://www.facebook.com/elpeznuestrodecadadia' target={"_blank"} rel="noreferrer">
                    <button className='btn-nav'>
                        <FaFacebook/>
                      </button>
                    </a>
                    <a href='https://www.instagram.com/elpeznuestrodecadadia/' target={"_blank"} rel="noreferrer">
                      <button className='btn-nav'>
                          <FaInstagram/>
                      </button>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=51995638935&text=¡Hola! vengo de su página web.`}  target={"_blank"} rel="noreferrer">
                      <button className='btn-nav'>
                        <FaWhatsapp/>
                      </button>
                    </a>
                    </div>
          </motion.div>
  </BackDrop>
  </>

}

export default BrandNavBar