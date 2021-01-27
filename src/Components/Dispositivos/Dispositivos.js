import React from 'react';
import { Button } from '../ButtonFlex/ButtonFlex';
import './Dispositivos.css'

export const Dispositivos = () => {
    return (
        <div className="Dispositivos-wrap text-light">
            {/* <div className="Dispositivos-img">
            </div> */}
            <img src="https://images.unsplash.com/photo-1579869747111-a1bf32a536a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=948&q=80" width="200px" alt="dispositivos" />
            <div className="Dispositivos-text">
                <h1>DISPONIBLE EN TODOS TUS DISPOSITIVOS</h1>
                <h4>Disfruta de tu audio exactamente donde, cuando y como quieras.</h4>
                <p>TuneIn está disponible en cientos de dispositivos domésticos, de automóviles y portátiles, y funciona con Alexa y Google Home.</p>
                <div className="container-buttons">
                    <Button type="button" buttonStyle='btn--iconClicked--outline'><i className="fab fa-apple"></i> Download</Button>
                    <div></div>
                    <Button type="button" buttonStyle='btn--iconClicked--outline'><i className="fab fa-google-play"></i> Download</Button>
                </div>
            </div>
        </div>
    )
}
