import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./ModalPlaylist.css";
import {serverRequest} from "../../helpers/urlBack";
import {getUserId} from "../../util/LocalStorage.utils";


export const ModalPlaylist = (props) => {
    const {show, onClose, title, podcastId} = props;
    const [openModalNew, setOpenModalNew] = useState(false);
    const [openModalNewSelect, setOpenModalNewSelect] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const userId = getUserId();
    const [forceReload, setForceReload] = useState(true);
    const [data, setData] = useState({
        title: "",
        description: "",
        user: userId,
        list: podcastId,
    });
    const [listPlaylist, setListPlaylist] = useState([]);
    const handleCloseModal2 = (e) => {
        setData({
            title: "",
            description: "",
            user: userId,
            list: podcastId,
        });
    }
    useEffect(() => {
        serverRequest("playlist", "GET")
            .then((response) => {
                setListPlaylist(response);
                console.log(listPlaylist);

            })
            .catch((response) => {
                console.log(response);

            });


    }, [forceReload])

    const saveName = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });

    }

    const saveDescription = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });

    }

    const handleReset = () => {
        document.querySelectorAll('input').forEach(
            input => (input.value = ""));

    };

    const submitNewPlaylist = () => {
        if (!data.title) {
            alert("Title is missing");
        } else if (!data.description) {
            alert("Description is missing");
        } else {
            serverRequest("playlist", "POST", data)
                .then((response) => {
                    //mensaje success
                    setOpenModalNew(false);
                })
                .catch((response) => {
                    console.log(response);
                });
        }
        forceReload ? setForceReload(false) : setForceReload(true);

    };

    const playlistSelected = (_id, podcastId) => {
        console.log(_id, podcastId);
        const body = {
            list: [podcastId]
        }

        serverRequest(`playlist/${_id}/podcast`, "PUT", body)
            .then((response) => {
                if (response) {
                    console.log(response)
                    setOpenModalNewSelect(false);
                }


            })
            .catch((response) => {
                console.log(response);

            });
    }


    const deletePlaylist = (_id) => {

        serverRequest(`playlist/${_id}`, "DELETE")
            .then((response) => {


            })
            .catch((response) => {
                console.log(response);
            });

        forceReload ? setForceReload(false) : setForceReload(true);
    }


    return (
        <>
            <Modal
                show={show}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modalHeader">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <>
                        <button onClick={() => {
                            onClose()
                            setOpenModalNew(true)
                        }}>Crear Nueva PlayList
                        </button>
                        <button onClick={() => {
                            onClose();
                            setOpenModalNewSelect(true);
                            forceReload ? setForceReload(false) : setForceReload(true);
                        }}>Seleccionar una Playlist
                        </button>
                        <button onClick={() => {
                            onClose();
                            setOpenModalDelete(true);
                            forceReload ? setForceReload(false) : setForceReload(true);
                        }}>Eliminar una Playlist
                        </button>
                    </>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={onClose} variant="secondary">
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*New Playlist*/}
            <Modal
                show={openModalNew}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modalHeader">
                    <Modal.Title>Introduce el nombre de la nueva Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">

                    <input name="title" type="text" value={data.playlist} onChange={saveName}
                           placeholder="Introduce el nombre"></input>

                    <input name="description" type="text" value={data.description} onChange={saveDescription}
                           placeholder="Introduce la descripción"></input>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={() => {
                        setOpenModalNew(false);
                        handleReset();
                        handleCloseModal2();
                    }} variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitNewPlaylist}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*Select Playlist*/}

            <Modal
                show={openModalNewSelect}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modalHeader">
                    <Modal.Title>Selecciona una Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    {listPlaylist.map(playlist => (
                        <div>
                            <p className="modalP">Título Playlist:</p>
                            <button onClick={() => {
                                playlistSelected(playlist._id, podcastId);
                                setOpenModalNewSelect(false);
                            }} className="modalButton">{playlist.title}</button>
                            <p className="modalP">Descripción Playlist:</p>
                            <p className="modalPDescripcion">{playlist.description}</p>
                            <hr className="hrModal"></hr>
                        </div>))
                    }
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={() => {
                        setOpenModalNewSelect(false);
                    }} variant="secondary">
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>


            {/*Delete Playlist*/}

            <Modal
                show={openModalDelete}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modalHeader">
                    <Modal.Title>Selecciona una Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    {listPlaylist.map(playlist => (
                        <div>
                            <p className="modalP">Título:</p>
                            <button className="modalButton" onClick={() => {
                                deletePlaylist(playlist._id)
                            }}>{playlist.title}</button>
                            <p className="modalP">Descripción:</p>
                            <p className="modalPDescripcion">{playlist.description}</p>
                            <hr className="hrModal"></hr>
                        </div>))
                    }
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={(e) => {
                        setOpenModalDelete(false);

                    }} variant="secondary">
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}