import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./ModalPlaylist.css";
import {serverRequest} from "../../helpers/urlBack";
import {getUserId, setSession} from "../../util/LocalStorage.utils";
import {PROFILE} from "../../routes/routes";
import {useHistory} from "react-router-dom";

export const ModalPlaylist = (props) => {
    const {show, onClose, buttons, title, podcastId} = props;

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
    const [listPlaylist, setListPlaylist] = useState({
        title: [],
        description: [],
    });
    const history = useHistory();
    const handleCloseModal2 = () => {
        setData({
            title: "",
            description: "",
            user: "",
            list: "",
        });
    }

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
        console.log(data);
        serverRequest("playlist", "POST", data)
            .then((response) => {
                //mensaje success
                alert("Playlist Guardada con Exito");

            })
            .catch((response) => {
                console.log(response);
            });
        setOpenModalNew(false);


    };

    const selectPlaylist = () => {

        serverRequest("playlist", "GET")
            .then((response) => {
                setListPlaylist(response);
                console.log(response);
              /*  for (let i = 0; i < response.length; i++) {
                    setListPlaylist({
                        ...listPlaylist,
                        title: response[i].title,
                  //      description: description.push(response[i].description),
                    })
                    console.log(listPlaylist);
                }*/

            })
            .catch((response) => {
                console.log(response);
            });

    }

    const deletePlaylist = (e) => {

        console.log("delete");

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
                            selectPlaylist();
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
                           placeholder="Introduce el nombre"></input>

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
                    <p>{listPlaylist[0].description}</p>
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
                    {data.playlist}
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


