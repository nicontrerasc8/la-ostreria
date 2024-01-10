import React from 'react'
import { FacebookEmbed, InstagramEmbed, TikTokEmbed } from 'react-social-media-embed'

const Embed = () => {
  return <div className='notas'>
      <h2 className='social-h2' style={{marginBottom: "calc(1rem + 3vh)"}}>
      Posts en redes sociales
    </h2>
    <div className="embeds">
    <InstagramEmbed url="https://www.instagram.com/p/CmuCFdohgqZ/" />
    <TikTokEmbed url="https://www.tiktok.com/@owen_castillo_r/video/7193199464687914246"/>
  </div>
  <div className='yt-videos'>
    <iframe src='https://www.youtube.com/embed/TGRqrSrLV3Q' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" AllowFullScreen/>
  </div>
  </div>
}

export default Embed