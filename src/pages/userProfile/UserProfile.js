import React from "react";
import {useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";
import {serverRequest} from "../../helpers/urlBack";
import {getUserId} from "../../util/LocalStorage.utils";
import {PodcastsUser} from "../../Components/PodcastsUser/PodcastsUser";
import {FavoritosUser} from "../../Components/FavoritosUser/FavoritosUser";
import "./UserProfile.css";
import {Button} from '../../Components/ButtonFlex/ButtonFlex';
import {deleteToken} from '../../util/LocalStorage.utils';
import {LOGIN} from "../../routes/routes";

export const UserProfile = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [listPlaylist, setListPlaylist] = useState([]);
    const userId = getUserId();
    console.log(userId)
    useEffect(() => {
        serverRequest(`data/user/${userId}`, "GET")
            .then((response) => {
                console.log(response);
                setUser(response);
            })
            .catch(console.log);
    }, []);

    const [selectedTab, setSelectedTab] = useState(0)

    const favoritos = () => {
        setSelectedTab(1)
    }
    const MisPodcasts = () => {
        setSelectedTab(0)
    }

    const playlist = () => {
        setSelectedTab(2)
        serverRequest("playlist", "GET")
            .then((response) => {
                setListPlaylist(response);
            })
            .catch((response) => {
                console.log(response);
            });

    }

    const exit = () => {
        deleteToken();
        history.push(LOGIN);
    }

    const options = {month: "2-digit", day: "2-digit", year: "numeric"};
    console.log("render user profile")

    return (
        <div>
            <div className="UserProfile-wrap">
                <br/>
                <div className="UserCard-wrap">
                    <div className={"UserInfo"}>
                        <h2>Tu perfil</h2>
                        <p>Personaliza tus datos y controla todos los detalles de tus podcasts.</p>
                        <br></br>
                        <div className="UserSectionLine"><p>Usuario </p><p
                            className="userInformationDisplayed">{user.username}</p></div>
                        <div className="UserSectionLine"><p>Nombre Completo </p> <p
                            className="userInformationDisplayed">{user.nombre}</p></div>
                        <div className="UserSectionLine"><p>Email </p><p
                            className="userInformationDisplayed">{user.email}</p></div>
                        <div className="UserSectionLine"><p>Fecha de nacimiento </p><p
                            className="userInformationDisplayed">{new Date(user.fechaNacimiento).toLocaleString("es-ES", options)}</p>
                        </div>
                    </div>
                    <div>
                        <div className={"vr"}/>
                        <img className="profilePicture" alt="background"
                             src="https://c0.anyrgb.com/images/434/137/recording-studio-person-woman-microphone-radio-podcast-talking-singing-presenter.jpg"/>
                    </div>
                    <br/>
                </div>
                <hr/>
                <br/>
            </div>
            <div className="UserPodcasts">
                <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                    <h4 className={selectedTab === 0 ? "selected" : "notSelected"} onClick={MisPodcasts}>Tus podcasts
                        subidos</h4>
                    <h4 className={selectedTab === 1 ? "selected" : "notSelected"} onClick={favoritos}>Tus
                        favoritos</h4>
                    <div><h4 className={selectedTab === 2 ? "selected" : "notSelected"}
                             onClick={playlist}>Playlist</h4>
                        {selectedTab === 2 && listPlaylist.map(playlist => (
                            <div className="playlistDiv">
                                <p className="playlistName">{playlist.title}</p>
                            </div>))
                        }</div>
                    <Link
                        to={{
                            pathname: "/uploadPodcast",
                            state: {user},
                        }}
                    >
                        Subir podcast
                    </Link>
                </div>
                <br/>
                {selectedTab === 0 && <PodcastsUser/>}
                {selectedTab === 1 && <FavoritosUser userId={userId}/>}
                <br/>
            </div>
            <Button className="salirButton" onClick={exit}>Salir</Button>
        </div>

    );
};
