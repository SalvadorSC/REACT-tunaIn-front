// import { NavBar } from '../../Components/NavBar/NavBar';
import React from "react";
import Slide from '../../Components/Slide/Slide';
import {Button} from "react-bootstrap";
import {CenterModal} from "../../Components/CenterModal/CenterModal";
import styles from "./home.css"


export const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            {/* <title>TunaIn</title> */}
            {/* <NavBar /> */}
            <Slide />
            <Button variant="primary" onClick={() => setModalShow(true)}>
                TunaIn Podcast Player
            </Button>

            <CenterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CenterModal />
            {/* 
            <Buscador />
            <CallToAction />
            <PodcastsDestacados />
            <Premium />
            <Dispositivos />
            <CallToAction />
            <Footer />
            */}

        </>

    );
};