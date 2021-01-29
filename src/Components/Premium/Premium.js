import React from 'react';
import './Premium.css';
import { Options } from "../Options/Options";


export const Premium = () => {

    return (

        <div className="Premium-wrap padding-10" >
            <div className="padding-10">
                <h1 className="padding-10">Ir a Premium</h1>
            </div>
            <div className="Premium-options padding-10" >

                <Options
                    account='Gratis'
                    title='0,00€ /mes'
                    content={['100 000 estaciones de radio', 'Noticias de última hora en vivo y charla deportiva', 'Todos tus podcasts favoritos']}
                    extra={['CNBC, CNN, FOX News Radio y MSNBC sin comerciales', 'Música sin comerciales para cada estado de ánimo y actividad', 'Menos anuncios en 100,000 estaciones de radio']}
                    button='Escucha ahora'
                    inversButton='inversButton'
                    extras='extras'
                />
                <Options
                    account='Premium'
                    title='8,99€ /mes'
                    content={['100 000 estaciones de radio', 'Noticias de última hora en vivo y charla deportiva', 'Todos tus podcasts favoritos']}
                    extra={['CNBC, CNN, FOX News Radio y MSNBC sin comerciales', 'Música sin comerciales para cada estado de ánimo y actividad', 'Menos anuncios en 100,000 estaciones de radio']}
                    button='Inicia Prueba Gratuita'

                />
            </div>
        </div>
    )
}
