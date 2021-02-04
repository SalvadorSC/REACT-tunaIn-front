import React from "react";
import {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import {serverRequest} from "../../helpers/urlBack";
import {getUserId} from "../../util/LocalStorage.utils";
import "./PodcastInformation.css";
import {format} from 'date-fns';


export const PodcastInformation = () => {
    const [user, setUser] = useState({});
    const [podcast, setPodcast] = useState({});
    const [comment, setComment] = useState([]);
    const [reload, setReload] = useState(false);
    const history = useHistory();
    let {podcastId} = useParams();
    let formatDate = "";
    const userId = getUserId();
    const date = new Date();
    const [saveComment, setSaveComment] = useState({
        comment: "",
        user: userId,
        podcast: podcastId,
        date: date,
    });

    function handleClick() {
        history.push(`/editPodcastInformation/${podcastId}`);

    }

    const handleReset = () => {
        document.querySelectorAll('input').forEach(
            input => (input.value = ""));

    };

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSaveComment({
            ...saveComment,
            [e.target.name]: value
        });
        console.log(saveComment);
    }


    useEffect(() => {
        serverRequest(`data/podcast/${podcastId}`, "GET")
            .then((response) => {
                setPodcast(response)
            })
            .catch(console.log);
    }, []);


    useEffect(() => {
        serverRequest(`data/user/${userId}`, "GET")
            .then((response) => {
                setUser(response);
            })
            .catch(console.log);
    }, []);

    useEffect(() => {
        serverRequest(`comment/${podcastId}`, "GET")
            .then((response) => {
                setComment(response);
                console.log(response);
            })
            .catch(console.log);
    }, [reload]);

    const submitNewComment = (e) => {
        e.preventDefault();
        if (!saveComment.comment) {
            alert("Comment is missing");
        } else {
            serverRequest(`comment/${podcastId}`, "POST", saveComment)
                .then((response) => {
                    //mensaje success
                    reload === false ? setReload(true) : setReload(false);

                })
                .catch((response) => {
                    console.log(response);
                });
        }

        handleReset();
    }


    const editPodcastLink = () => {
        if (user._id === podcast.id_author) {
            return (
                <>
                    <div>
                        <Link onClick={handleClick}>
                            <button>Editar podcast</button>
                        </Link>
                    </div>
                </>)
        }
    }

    return (
        <>
            <div className="UserProfile-wrap">
                <br/>
                <div className="UserCard-wrap">
                    <div className={"UserInfo"}>
                        <h2>{podcast.title}</h2>
                        <div><p>Categories: <span className="podcastInformationDisplayed">{podcast.categories}</span>
                        </p></div>
                        <div className="UserSectionLine"><p>Description:</p></div>
                        <div className="UserSectionLine"><p
                            className="podcastInformationDisplayed">{podcast.description}</p></div>
                    </div>
                    <div className={"vr"}/>
                    <img className="profilePicture" alt="background"
                         src="https://c0.anyrgb.com/images/434/137/recording-studio-person-woman-microphone-radio-podcast-talking-singing-presenter.jpg"/>
                    <br/>
                </div>
                <hr></hr>
                <form onSubmit={
                    submitNewComment

                }>

                    <input name="comment" type="text"
                           placeholder="Introduce tu comentario" onChange={handleChange}></input>
                    <button type='submit' placeholder='Enviar' value='Submit'>Enviar</button>
                </form>
                <div>
                    {comment.map(comment => (
                        <div>
                            { comment.date ?  <h5>{`${user.nombre} escribió el ${comment.date && format(new Date(comment.date), "dd,MM,yyyy / h:mm ")}`}</h5> :
                            <h5>{`${user.nombre} escribió: `}</h5>}
                            <p>{comment.comment}</p>
                            <hr className="hrModal"></hr>
                        </div>))
                    }
                </div>
                <div className="PodcastsUser-wrap">
                    <br/>
                    {editPodcastLink()}
                </div>
            </div>
        </>
    );
};
