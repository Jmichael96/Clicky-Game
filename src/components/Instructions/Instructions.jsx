import React, { Fragment, useState } from "react";
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from "mdbreact";
import "./instructions.css";

const Instructions = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <Fragment>
            <button id="instructionBtn" className="buttons" onClick={toggleModal} >INSTRUCTIONS</button>
            <MDBModal isOpen={modal} toggle={toggleModal}>
                <MDBModalHeader toggle={toggleModal}>INSTRUCTIONS</MDBModalHeader>
                <MDBModalBody>
                    <p>The goal of this game is to select all the images without selecting an image twice.
                            Its kind of like the game memory, only after you select and image, they all shuffle. 
                            Start by clicking on an image and the game will begin.</p>
                </MDBModalBody>
                <MDBModalFooter>
                    <button className="buttons" onClick={toggleModal}>CLOSE</button>
                </MDBModalFooter>
            </MDBModal>
        </Fragment>
    )
}

export default Instructions;