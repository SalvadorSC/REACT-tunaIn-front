import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./ModalPlaylist.css";

export const ModalPlaylist = (props) => {
    const {show, onClose, buttons, title, podcastId} = props;

    const [openModalNew, setOpenModalNew] = useState(false);
    const [openModalNewSelect, setOpenModalNewSelect] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [data, setData] = useState("");

    const playlistHandler = e => {
        e.preventDefault();
        setData({playlist: e.target.value, podcast: podcastId});
        console.log(data);
    }

    const handleCloseModal2 = () => {
        setData({
            playlist: "",
            podcast: "",
        });
    }
    const submitNewPlaylist = () => {

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
                        <button onClick={()=>{
                            onClose();
                            setOpenModalNewSelect(true);
                        }}>Seleccionar una Playlist</button>
                        <button onClick={()=>{
                            onClose();
                            setOpenModalDelete(true);
                        }}>Eliminar una Playlist</button>
                    </>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={onClose} variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        Enviar
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

                    <input type="text" value={data.playlist} onChange={playlistHandler}
                           placeholder="Introduce el nombre"></input>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={() => {
                        setOpenModalNew(false);
                        handleCloseModal2();
                    }} variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={submitNewPlaylist}>
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
                    {data.playlist}
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button onClick={() => {
                        setOpenModalNewSelect(false);

                    }} variant="secondary">
                        Cerrar
                    </Button>
                    <Button variant="primary" >
                        Enviar
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
            <Button onClick={() => {
                setOpenModalDelete(false);

            }} variant="secondary">
                Cerrar
            </Button>
            <Button variant="primary" >
                Enviar
            </Button>
        </Modal.Footer>
    </Modal>

</>

    );
}


