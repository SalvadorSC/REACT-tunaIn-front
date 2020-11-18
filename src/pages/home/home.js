// import { NavBar } from '../../Components/NavBar/NavBar';
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {CenterModal} from "../../Components/CenterModal/CenterModal";
import styles from "./home.css";
import {Buscador} from "../../Components/Buscador/Buscador";
import {CallToAction} from "../../Components/CallToAction/CallToAction";
import {PodcastsDestacados} from "../../Components/PodcastsDestacados/PodcastsDestacados";
import {Premium} from "../../Components/Premium/Premium";
import Carousel from '../../Components/Carousel/Carousel';
import axios from 'axios';
import { Dispositivos } from "../../Components/Dispositivos/Dispositivos";
import { Footer } from "../../Components/Footer/Footer";


const SPLASHBASE_URL = 'http://www.splashbase.co/api/v1/images/search';


export const Home = () => {
    const [imgList, setImgList] = useState([]);

    useEffect(() => {

        axios.get(SPLASHBASE_URL, {
            params:{
                "query": "music"
            }
        })
            .then((resp) => {
                setImgList(resp.data.images);
            }).catch((err) => {
            console.log('Unable to Fetch Image from splashbase', err);
        });
    }, []);
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            {/* <title>TunaIn</title> */}
            {/* <NavBar /> */}

            {imgList.length === 0 && <div>Loading...</div>}
            {imgList.length > 0 &&
            <Carousel  imgList={imgList} img_width={600} img_height={400}
                      visibleImages={3} duration={750}/>
            }

            <Buscador/>
         <CallToAction
        title="TU PLATAFORMA DE REFERENCIA"
        text1="Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas. Contenido de tu interés sobre música, deportes, política, humor y mucho más."
        text2="Fácil, rápido y siempre a tu lado."
        buttonText="Escuchar ahora"
      />
      <PodcastsDestacados />
      <Premium />
      <Dispositivos />
      <CallToAction
        title="MÚSICA, DEPORTES, NOTICIAS Y MUCHO MÁS"
        text1="Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas. Contenido de tu interés sobre música, deportes, política, humor y mucho más."
        text2="Fácil, rápido y siempre a tu lado."
        buttonText="Escuchar ahora"
      />
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        TunaIn Podcast Player
      </Button>

      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <CenterModal /> */}
      <Footer />
        </>
    );


        title="TU PLATAFORMA DE REFERENCIA"
        text1="Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas. Contenido de tu interés sobre música, deportes, política, humor y mucho más."
        text2="Fácil, rápido y siempre a tu lado."
        buttonText="Escuchar ahora"
      />
      <PodcastsDestacados />
      <Premium />
      <Dispositivos />
      <CallToAction
        title="MÚSICA, DEPORTES, NOTICIAS Y MUCHO MÁS"
        text1="Escucha los mejores podcasts cerca de ti, accede a las cadenas de radio más populares y también las alternativas. Contenido de tu interés sobre música, deportes, política, humor y mucho más."
        text2="Fácil, rápido y siempre a tu lado."
        buttonText="Escuchar ahora"
      />
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        TunaIn Podcast Player
      </Button>

      <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
      <CenterModal /> */}
      <Footer />
    </>

  );
};
