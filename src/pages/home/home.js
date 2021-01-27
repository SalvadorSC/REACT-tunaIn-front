// import { NavBar } from '../../Components/NavBar/NavBar';
import React /*, { useEffect, useState } */ from "react";
// import { Button } from "react-bootstrap";
import "./home.css";
import { Buscador } from "../../Components/Buscador/Buscador";
import { CallToAction } from "../../Components/CallToAction/CallToAction";
import { PodcastsDestacados } from "../../Components/PodcastsDestacados/PodcastsDestacados";
import { Premium } from "../../Components/Premium/Premium";
import { Carousel } from '../../Components/Carousel/Carousel';
import { Dispositivos } from "../../Components/Dispositivos/Dispositivos";
//import {Button} from '../../Components/ButtonFlex/ButtonFlex';
// const SPLASHBASE_URL = new URL('http://www.splashbase.co/api/v1/images/search?query=music');

export const Home = () => {
    // const [imgList, setImgList] = useState([]);
    // const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Carousel />
            <Buscador 
            buscadorClass="buscador-home"
            buscadorStyleClass ="buscadorStyle-home"
            resultadosbusquedaClass="resultadosbusquedaClass-home"/>
            <CallToAction
                title="TU PLATAFORMA DE REFERENCIA"
                text1="Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas. Contenido de tu interés sobre música, deportes, política, humor y mucho más."
                text2="Fácil, rápido y siempre a tu lado."
                text3="Fácil, rápido y siempre a tu lado."
                buttonText="Escuchar ahora"
            />
            <PodcastsDestacados />
            <Premium />
            <Dispositivos />

            
        </>
    );
};
