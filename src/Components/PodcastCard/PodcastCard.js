import React, { useContext } from "react";
import './PodcastCard.css';
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from '../ButtonFlex/ButtonFlex';
import {serverRequest} from "../../helpers/urlBack";
import {getUserId, hasSession} from "../../util/LocalStorage.utils";
import Modal from "react-bootstrap/Modal";
import AudioPlayer from 'react-h5-audio-player';
import { usePlaybarContext } from "../../contexts/playbar";



export const PodcastCard = ({title, categories, author, img, podcastId, description, audio}) => {
    const [podcastWrapClass, setPodcastWrapClass] = useState();
    const [podcastAuthor, setPodcastAuthor] = useState(undefined);
    const [favoritosUsuario, setFavoritosUsuario] = useState(undefined);
    const [podcastEliminado, setPodcastEliminado] = useState({});
    const url = window.location.href;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => {
        setShowModal2(false);
        setData({
            playlist: "",
            podcast: "",
        });
    }
        let userId;
        if (hasSession()) {
            userId = getUserId();
        }

    let history = useHistory();
    const [iconFavoriteOnClick, setIconFavoriteOnClick] = useState(false);
    const playbar = usePlaybarContext();

    useEffect(() => {
        serverRequest(`data/favoritos/?id_podcast=${podcastId}&&id_author=${userId}`, "GET")
            .then((response) => {


                setFavoritosUsuario(response[0]);
                console.log(favoritosUsuario);
                console.log("ANALIZED USER ^");
                if (response.length > 0) {
                    console.log("PODCAST ID " + podcastId)
                    setFavoritosUsuario(response[0]);
                    /* console.log(favoritosUsuario);
                    console.log("ANALIZED USER ^"); */
                    if (response.length > 0) {
                        /* console.log("PODCAST ID " + podcastId) */

                        setIconFavoriteOnClick(true);
                    }
                }
            })
            .catch(console.log);

    }, [])


        const handleShowModal2 = () => setShowModal2(true);
        const [data, setData] = useState({
            playlist: "",
            podcast: "",
        });



        useEffect(() => {
            serverRequest(`data/favoritos/?id_podcast=${podcastId}&&id_author=${userId}`, "GET")
                .then((response) => {
                    setFavoritosUsuario(response[0]);
                    console.log(favoritosUsuario);
                    console.log("ANALIZED USER ^");
                    if (response.length > 0) {
                        console.log("PODCAST ID " + podcastId)
                        setIconFavoriteOnClick(true);
                    }
                })
                .catch(console.log);
        }, [])


        function clickFavorites() {
            if (!favoritosUsuario) {
                const newFavorite = {
                    id_podcast: podcastId,
                    id_author: userId
                };
                console.log(newFavorite)
                serverRequest("data/favoritos/", "POST", newFavorite)
                    .then((response) => {
                        console.log(favoritosUsuario + " FAVORITOS USER")
                        console.log("CREADO")
                        setIconFavoriteOnClick(true);
                        setFavoritosUsuario(response);
                    })
                /*       serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
                        .then((response) => {
                          setFavoritosUsuario(response)
                        }) */
            } else if (favoritosUsuario && favoritosUsuario._id) {
                console.log("yes")
                serverRequest(`data/favoritos/${favoritosUsuario._id}`, "DELETE")
                    .then(response => {
                        console.log(response);
                        setIconFavoriteOnClick(false);
                        setFavoritosUsuario(undefined);
                    });
                /*
                      serverRequest(`data/favoritos/?id_podcast=${podcastId}`, "GET")
                        .then(response => {
                          debugger;
                          serverRequest(`data/favoritos/${response[0]._id}`, "DELETE")
                          .then(response => console.log(response));
                        })
                      console.log("yes")
                      setIconFavoriteOnClick(false)
                      serverRequest(`data/favoritos/?id_author=${userId}`, "GET")
                        .then((response) => {
                          setFavoritosUsuario(response)
                        }) */
            }
        }

        const playlistHandler = e => {
            e.preventDefault();
            setData({playlist: e.target.value, podcast: podcastId});
            console.log(data);
        }

        function playPodcast() {
            playbar.setPlaybarPodcast([{title, categories, author, img, podcastId, description, audio}]);
          }

        /* ESTO ES PARA COGER EL NOMBRE DEL AUTOR */

        /* useEffect(() => {
          serverRequest(`data/user/${author}`, "GET")
              .then((response) => {
                setPodcastAuthor(response)
              })
              .catch(console.log);
        }, []) */

        function handleClick() {
            history.push(`/PodcastInformation/${podcastId}`);
        }

        useEffect(() => {
            if (url === "http://localhost:3000/") {
                setPodcastWrapClass("PodcastCard-wrap");
            } else {
                setPodcastWrapClass("PodcastCard-wrap-MyPodcasts");
            }
        }, [url]);

        return (
            <div className={podcastWrapClass}>
                <div style={{backgroundImage: `url(${img})`}} className="PodcastCard-img">
                    {/* <img src={img} alt={title} /> */}
                </div>
                <div className="icon-wrapper">

                    {/*LINK ICON */}
                    <Button onClick=''
                            type='button'
                            buttonStyle='btn--icon--outline'
                    >
                        <i className="fas fa-ellipsis-h icon-mini"/>
                    </Button>

                    {/* PLAY ICON */}
                    <Button onClick={()=>playPodcast(podcastId)}
                            type='button'
                            buttonStyle='btn--icon--outline'
                    ><i className='fas fa-play play-icon'></i>
                    </Button>
                    {/* Add to Playlist */}
                    <Button onClick={handleShow}
                            type='button'
                            buttonStyle='btn--icon--outline'
                    ><i className='fas fa-plus'></i>
                    </Button>
                    {/* FAVORITE ICON BUTTON  */}
                    <Button onClick={clickFavorites}
                            type='button' children={podcastId}
                            buttonStyle={iconFavoriteOnClick ? 'btn--iconClicked--outline' : 'btn--icon--outline'}
                    >
                        <i className="fas fa-heart"/>
                    </Button>
                </div>
                <div className="PodcastCard-text">
                    <Link className="PostcastCard-title" onClick={handleClick}>{title}</Link>
                    <p className="PostcastCard-author">{author}</p>
                    <p className="PostcastCard-duration">{categories}</p>
                    <p className="PostcastCard-description">{description}</p>
                    <p className="PostcastCard-description">{podcastId}</p>
                </div>
                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header className="modalHeader">
                            <Modal.Title>Quieres crear una Playlist o seleccionar alguna creada?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <button onClick={handleShowModal2} className="modalButton">Crear Nueva PlayList</button>
                            <button className="modalButton">Seleccionar una Playlist</button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>

                {/* Second Modal */}

                <>
                    <Modal
                        show={showModal2}
                        onHide={handleCloseModal2}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header className="modalHeader">
                            <Modal.Title>Nueva PlayList </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" value={data.playlist} onChange={playlistHandler}
                                   placeholder="Introduce el nombre"></input>
                            <button onClick={handleCloseModal2} className="modalButton" type="submit">Enviar
                            </button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal2}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>

        );

    };