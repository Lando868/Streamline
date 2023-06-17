"use client";

import { useState, useEffect, useRef } from "react";


const AssetModal = (props) => {
    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.style.opacity = 0.98;
        dialogRef.current.showModal();
    }
    const closeDialog = () => dialogRef.current.close();
    return (
        <div
            className="modal-testing"

        >
            <button
                className="btn btn-modal"
                onClick={openDialog}
            >
                Show modal
            </button>
            <dialog
                ref={dialogRef}
                className="modalive"
            >
                <h1>{props.asset}</h1>
                <p>{props.desc}</p>

                <h3>This is a modal</h3>
                <button className="btn-modal"
                    onClick={closeDialog}>Close</button>


            </dialog>
        </div>
    )
}

export default AssetModal;