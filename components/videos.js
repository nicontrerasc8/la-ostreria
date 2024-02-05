import React, { useState } from 'react'
import Video from './video'
import { FaYoutube } from 'react-icons/fa'

const Vid = [
    {
        url: "https://www.youtube.com/embed/kpvFeLJs7e8",
        title: "Preparación de Ostras al limón"
    },
    {
        url: "https://www.youtube.com/embed/_6i9ytGYv3Q",
        title: "Preparación de Ceviche de ostras"
    },
]

const VideoComponent = ({info}) => {

    const [onIs, setOn] = useState(false)

    return <>

    <article >
        {info.title}
    <button onClick={() => setOn(true)}>
        Ver vídeo
    </button>
    </article>
    </>
}

const Videos = () => {
    const [VideoOn, setVideo] = useState(false)
    const [URL, setURL] = useState("")
    const VideoChange = (info) => {
        setVideo(!VideoOn)
        setURL(info)
    }

  return <>
  <Video isOn={VideoOn} out={() => setVideo(!Video)} url={URL}/>
  <div className='notas'>
  <h2 className='social-h2' style={{marginBottom: "calc(1rem + 3vh)"}}>
  Vídeos del Chef Aurelio Exebio
</h2>
<div className='videos-23'>
    {
        Vid && Vid.length && Vid.map((info, idx) => {
            return <article className='art' key={idx}>
                <FaYoutube/>
               <p> {info.title}</p>
            <button className='btn-nav' onClick={() => VideoChange(info.url)}>
                Ver vídeo
            </button>
            </article>
            
        })
    }
</div>
</div>
</>
}

export default Videos
