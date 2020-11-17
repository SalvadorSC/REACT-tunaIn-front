import React from 'react'
import './CallToAction.css';

export const CallToAction = (title, text1, text2, buttonText) => {
  return (
    <div className="CallToAction-wrap">
      <h1>TU PLATAFORMA DE REFERENCIA</h1>
      <p>Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas.</p>
      <p>Contenido de tu interés sobre música, deportes, política, humor y mucho más.</p>
      <p>Fácil, rápido y siempre a tu lado.</p>
      <button className="CallToAction-button">Escuchar ahora</button>
      {/* <h1>{title}</h1>
      <p>{text1}</p>
      <p>{text2}</p>
      <button className="CallToAction-button">{buttonText}</button> */}
    </div>
  )
}
