import React from "react";
import './PodcastCard.css';

import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from '../ButtonFlex/ButtonFlex';
import {serverRequest} from "../../helpers/urlBack";
import {getUserId, hasSession} from "../../util/LocalStorage.utils";
import {ModalPlaylist} from "../ModalPlaylist/ModalPlaylist";



export const PodcastCard = ({ title, categories, author, img, podcastId, description }) => {
    const [podcastWrapClass, setPodcastWrapClass] = useState();
    const [favoritosUsuario, setFavoritosUsuario] = useState(undefined);
    const url = window.location.href;
    const [openModal, setOpenModal] = useState(false);
    const [iconFavoriteOnClick, setIconFavoriteOnClick] = useState(false);



    let userId;
    if (hasSession()) {
        userId = getUserId();
    }

    let history = useHistory();

    useEffect(() => {
        serverRequest(`data/favoritos/?id_podcast=${podcastId}&&id_author=${userId}`, "GET")
            .then((response) => {
                setFavoritosUsuario(response[0]);
                if (response.length > 0) {
                    console.log("PODCAST ID " + podcastId)
                    setFavoritosUsuario(response[0]);
                    if (response.length > 0) {

                        setIconFavoriteOnClick(true);
                    }
                }
            })
            .catch(console.log);

    }, [])


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

    useEffect(() => {
        serverRequest(`data/favoritos/?id_podcast=${podcastId}&&id_author=${userId}`, "GET")
            .then((response) => {
                setFavoritosUsuario(response[0]);
                /* console.log(favoritosUsuario);
                console.log("ANALIZED USER ^"); */
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

        }
    }


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
          <div style={{ backgroundImage: `url(${img})` }} className="PodcastCard-img">

                {/* <img src={img} alt={title} /> */}
            </div>
            <div className="icon-wrapper">

                {/*LINK ICON */}
                <Button onClick=''

                    type='button'
                    buttonStyle='btn--icon--outline'
                >
                    <i className="fas fa-ellipsis-h icon-mini" />

                </Button>

                {/* PLAY ICON */}
                <Button onClick=''

                    type='button'
                    buttonStyle='btn--icon--outline'

                ><i className='fas fa-play play-icon'></i>
                </Button>
                {/* Add to Playlist */}

                <Button onClick={() => setOpenModal(true)}
                        type='button'
                        buttonStyle='btn--icon--outline'

                ><i className='fas fa-plus'></i>
                </Button>
                {/* FAVORITE ICON BUTTON  */}
                <Button onClick={clickFavorites}

                    type='button' children={podcastId}
                    buttonStyle={iconFavoriteOnClick ? 'btn--iconClicked--outline' : 'btn--icon--outline'}
                >
                    <i className="fas fa-heart" />

                </Button>
            </div>
            <div className="PodcastCard-text">
                <Link className="PostcastCard-title" onClick={handleClick}>{title}</Link>
                <p className="PostcastCard-author">{author}</p>
                <p className="PostcastCard-duration">{categories}</p>
                <p className="PostcastCard-description">{description}</p>
                <p className="PostcastCard-description">{podcastId}</p>
            </div>


            <ModalPlaylist variant="primary" title="Que quieres hacer ?" podcastId={podcastId} buttons={true} show={openModal} onClose={() => setOpenModal(false)}>
            </ModalPlaylist>


        </div>

    );

};



