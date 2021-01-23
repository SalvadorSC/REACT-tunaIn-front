import { Modal } from "react-bootstrap";
import {AudioPlayer} from "../AudioPlayer/AudioPlayer";
import Button from 'react-bootstrap/Button';
import React from "react";
import styles from "./CenterModal.css";

export function CenterModal(props) {
    return (
        <>
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName
            contentClassName

        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                   TunaIn
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 style={styles}>{props.title}</h4>
                <h4><AudioPlayer /></h4>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modalButton" onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
            </>
    );
}