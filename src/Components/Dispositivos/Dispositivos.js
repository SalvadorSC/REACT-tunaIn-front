import React from 'react';
import './Dispositivos.css'

export const Dispositivos = () => {
    return (
        <div className="Dispositivos-wrap">
            {/* <div className="Dispositivos-img">
            </div> */}
            <img src="https://images.unsplash.com/photo-1579869747111-a1bf32a536a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=948&q=80" width="200px" />
            <div className="Dispositivos-text">
                <h1>DISPONIBLE EN TODOS TUS DISPOSITIVOS</h1>
                <p>Disfruta de tu audio exactamente donde, cuando y como quieras. TuneIn está disponible en cientos de dispositivos domésticos, de automóviles y portátiles, y funciona con Alexa y Google Home.</p>
                <button type="button" className="download-apple"><i className="fab fa-apple"></i> Download</button>
                <button type="button" className="download-google"><i className="fab fa-google-play"></i> Download</button>
            </div>
        </div>
    )
}
