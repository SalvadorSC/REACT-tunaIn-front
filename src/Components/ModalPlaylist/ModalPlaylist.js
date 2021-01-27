import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./ModalPlaylist.css";
import {serverRequest} from "../../helpers/urlBack";
import {getUserId, setSession} from "../../util/LocalStorage.utils";


export const ModalPlaylist = (props) => {
    const {show, onClose, title, podcastId} = props;
    const [openModalNew, setOpenModalNew] = useState(false);
    const [openModalNewSelect, setOpenModalNewSelect] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const userId = getUserId();
    const [data, setData] = useState({
        title: "",
        description: "",
        user: userId,
        list: podcastId,
    });
    const [listPlaylist, setListPlaylist] = useState([]);
    const handleCloseModal2 = () => {
        setData({
            title: "",
            description: "",
            user: "",
            list: "",
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


    }, [listPlaylist])

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

    const submitNewPlaylist = () => {
        if (!data.title) {
            alert("title is missing");
        } else if (!data.description) {
            alert("description is missing");
        } else {
            serverRequest("playlist", "POST", data)
                .then((response) => {
                    //mensaje success
                    alert("Playlist Guardada con Exito");

                })
                .catch((response) => {
                    console.log(response);
                });
            setOpenModalNew(false);
        }


    };

    const playlistSelected = (_id, podcastId) => {
        console.log(_id, podcastId);
        const body = {
            list: [podcastId]
        }

        serverRequest(`playlist/${_id}/podcast`, "PUT", body)
            .then((response) => {
                if (response.ok) {
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
                if (response) {
                    console.log(response)

                }


            })
            .catch((response) => {
                console.log(response);
            });

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
                        }}>Seleccionar una Playlist
                        </button>
                        <button onClick={() => {
                            onClose();
                            setOpenModalDelete(true);
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
                           placeholder="Introduce el nombre" required></input>

                    <input name="description" type="text" value={data.description} onChange={saveDescription}
                           placeholder="Introduce la descripción"></input>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={() => {
                        setOpenModalNew(false);
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
                            <p className="modalP">Título:</p>
                            <button onClick={() => {
                                playlistSelected(playlist._id, podcastId)
                            }} className="modalButton">{playlist.title}</button>
                            <p className="modalP">Descripción:</p>
                            <p className="modalPDescripcion">{playlist.description}</p>
                            <hr></hr>
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
                            <button onClick={() => {
                                deletePlaylist(playlist._id)
                            }} className="modalButton">{playlist.title}</button>
                            <p className="modalP">Descripción:</p>
                            <p className="modalPDescripcion">{playlist.description}</p>
                            <hr></hr>
                        </div>))
                    }
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={(e) => {
                        setOpenModalDelete(false);
                        deletePlaylist(e);

                    }} variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}


