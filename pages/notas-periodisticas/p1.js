import Image from 'next/image'
import React from 'react'

const CartaOnline = () => {
  return <div className='carta-online'>
    <article>
    <Image src={"/caretas.jpeg"} layout="fill" alt="El pez nuestro de cada día"/>
    </article>
  </div>
}

export default CartaOnline