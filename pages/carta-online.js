import Image from 'next/image'
import React from 'react'

const CartaOnline = () => {
  return <div className='carta-online'>
    <article>
    <Image src={"/menu.png"} layout="fill" alt="El pez nuestro de cada día"/>
    </article>
    <article>
    <Image src={"/menu-2.png"} layout="fill" alt="El pez nuestro de cada día"/>
    </article>
    <article>
    <Image src={"/menu-3.png"} layout="fill" alt="El pez nuestro de cada día"/>
    </article>
    <article>
    <Image src={"/menu-4.png"} layout="fill" alt="El pez nuestro de cada día"/>
    </article>
  </div>
}

export default CartaOnline