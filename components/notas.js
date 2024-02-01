import React from 'react'
import { FaReadme } from 'react-icons/fa'
import {motion} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'


const Arr = [
    {
        by: "Diario Ojo",
        title: "La Ostrería: Encuentre las mejores ostras desde S/. 17 en Surquillo y Punta Hermosa",
        link: "https://ojo.pe/mujer/la-ostreria-encuentre-las-mejores-ostras-desde-s-17-en-surquillo-y-punta-hermosa-noticia/",
        img: "/notas3.jpg"
    },
    {
        logo: "/logo-com.png",
        logoClass: "el-comercio",
        by: "El Comercio",
        title: "El pez nuestro de cada día, el huarique de Surquillo que se volvió viral con su festival de ostras",
        link: "https://elcomercio.pe/provecho/restaurantes/el-pez-nuestro-de-cada-dia-el-huarique-de-surquillo-que-se-volvio-viral-con-su-festival-de-ostras-noticia/",
        img: "/notas1.jpg"
    },
    {
        by: "7 Caníbales",
        title: "Las ostras de Casma en El Pez nuestro de cada día",
        link: "https://www.7canibales.com/restaurantes/pez-nuestro-cada-dia/",
        img: "/notas2.jpg",
    },
    {

        by: "Diario Ojo",
        title: "Ostras de lujo desde S/15 en huarique de Surquillo",
        link: "https://ojo.pe/mujer/ostras-de-lujo-al-alcance-de-todos-en-huarique-en-surquillo-web-ojo-noticia/",
        img: "/notas3.jpg"
    },
    {
        by: "Revista Caretas",
        title: "¡Ostras! De cómo una esquina surquillana se ha hecho casi del monopolio ostrero en un país marisquero, pero iletrado del molusco por excelencia.",
        img: "/ostras.jpeg",
        to: "/notas-periodisticas/p1"
    },
    {
        by: "Diario Trome",
        title: "Don Aurelio es el ‘rey de las ostras gigantes’: Conoce uno de los mejores ‘huariques’ de Surquillo",
        link: "https://trome.com/emprende-trome/huarique-en-surquillo-don-aurelio-es-el-rey-de-las-ostras-gigantes-el-pez-nuestro-de-cada-dia-trpm-noticia/",
        img: "/notas4.jpg"
    },
    {
        by: "Perú 21",
        title: "Entrevista.21, con Carlos Cabanillas León",
        link: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/WhatsApp%20Image%202023-08-11%20at%2018.25.19.jpeg?alt=media&token=34a98a19-682d-432b-ae5d-5b5843634cd1",
        img: "/notas5.jpeg"
    }
]


const Notas = () => {
    console.log(Arr)
  return <div className='notas'>
    <h2>Notas periodísticas</h2>
        {
            Arr.length && Arr.map((info,idx) => {
                return <motion.header 
                className={"vw35"}
                viewport={{once: true}}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: .5 }}
                key={idx}>
                <section>
                    {
                    info.logo ? 
                    <>
                        <img src={info.logo} className={info.logoClass}/>
                        <p style={{margin: 0, padding: 0}}/>
                    </>
                    : <p>
                    <span>{info.by}</span>
                    </p>
                }
                    <h2>
                    &quot;{info.title}&quot;.
                    </h2>
                    {
                        info.link ? 
                        <a href={info.link} target={"_blank"} rel="noreferrer">
                    <button className='btn-nav' >
                        <FaReadme/> Lee el artículo
                    </button>
                    </a>:
                    <Link href={info.to}>
                        <button className='btn-nav' >
                        <FaReadme/> Lee el artículo
                    </button>
                    </Link>
                    }
                </section>
                <article>
        <Image src={info.img} fill alt="Si"/>
    </article>
                </motion.header>
            })
        }
  </div>
}

export default Notas