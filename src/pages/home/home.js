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
            <CallToAction/>
            <PodcastsDestacados/>
            <Premium/>

            {/*
            <Dispositivos />
            <CallToAction />
            <Footer />
        */}
            <Button variant="primary" onClick={() => setModalShow(true)}>
                TunaIn Podcast Player
            </Button>

            <CenterModal show={modalShow} onHide={() => setModalShow(false)}/>
            <CenterModal/>
        </>
    );
};
