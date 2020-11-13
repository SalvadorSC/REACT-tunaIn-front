// import { NavBar } from '../../Components/NavBar/NavBar';
import React from "react";
import Slide from '../../Components/Slide/Slide';
import {Button} from "react-bootstrap";
import {CenterModal} from "../../Components/CenterModal/CenterModal";
import styles from "./home.css"
import { Buscador } from "../../Components/Buscador/Buscador";


export const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            {/* <title>TunaIn</title> */}
            {/* <NavBar /> */}
            <Slide />
            <Buscador />
            
            {/* 
            <CallToAction />
            <PodcastsDestacados />
            <Premium />
            <Dispositivos />
            <CallToAction />
            <Footer />
        */}
        <Button variant="primary" onClick={() => setModalShow(true)}>
            TunaIn Podcast Player
        </Button>

        <CenterModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <CenterModal />

        </>

    );
};