import React from 'react'
import './Footer.css';

export const Footer = ({ footerClass }) => {
    return (
        <div className={footerClass}>
            <div className="overlay"></div>
            <div className="footer-text">
                <div>
                    <h4>Project authors</h4>
                    <a href="https://github.com/SalvadorSC">Salvador Sánchez</a>
                    <a href="https://github.com/ElisAlvarez75">Elis Alvarez</a>
                    <a href="https://github.com/PepNieto">Pep Nieto</a>
                    <a href="https://github.com/lluisbo">Lluís Boria</a>
                    <a href="https://github.com/KarimGP">KarimGP</a>
                </div>
                <div>
                    <h5>Agradecimientos</h5>
                    <a href="https://github.com/cristinapicatoste">Cristina Picatoste</a>
                    <a href="https://github.com/Gorkatg">Gorka Tusell</a>
                    <a href="https://github.com/julianvillada">Julian Villada</a>
                </div>
            </div>
            <p>Tuna In® 2021</p>
        </div>
    )
}
