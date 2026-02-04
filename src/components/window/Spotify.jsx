import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = () => {
  return (
    <MacWindow width='22vw' >
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbVhgADFy3im?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify