import React from 'react'
import { FacebookEmbed, InstagramEmbed, TikTokEmbed } from 'react-social-media-embed'

const Embed = () => {
  return <div className='notas'>
      <h2 className='social-h2' style={{marginBottom: "calc(1rem + 3vh)"}}>
      Posts en redes sociales
    </h2>
  <div className='yt-videos'>
    <iframe src='https://www.youtube.com/embed/ipI6z-jnf-o' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" AllowFullScreen/>
  </div>
  </div>
}

export default Embed