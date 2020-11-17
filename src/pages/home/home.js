// import { NavBar } from '../../Components/NavBar/NavBar';
import React from "react";
import Slide from "../../Components/Slide/Slide";
// import { Button } from "react-bootstrap";
// import { CenterModal } from "../../Components/CenterModal/CenterModal";
import "./home.css";
import { Buscador } from "../../Components/Buscador/Buscador";
import { CallToAction } from "../../Components/CallToAction/CallToAction";
import { PodcastsDestacados } from "../../Components/PodcastsDestacados/PodcastsDestacados";
import { Premium } from "../../Components/Premium/Premium";
import { Dispositivos } from "../../Components/Dispositivos/Dispositivos";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {/* <title>TunaIn</title> */}
      {/* <NavBar /> */}
      <Slide />
      <Buscador />
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
};
