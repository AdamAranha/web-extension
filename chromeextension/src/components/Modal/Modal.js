import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';

export default function Modal({ showModal, setShowModal, setModalEditShow }) {

    const [temptemp, setTemptemp] = useState()
    const [modalOpacity, setModalOpacity] = useState('100%')
    let modalRef = useRef();

    useEffect(() => {
        let something = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal('true')
            }
        }
        document.addEventListener('mousedown', something);
        return () => {
            document.removeEventListener('mousedown', something)
        }
    });

    function editModal() {

        setTemptemp(
            // <div className='modal-edit-container'>
            //     Hi
            // </div>
            setModalEditShow('true')

        )
        // setModalOpacity('0')
    }

    return <> {!showModal ?
        <div ref={modalRef} className='modal-container' style={{
            opacity: modalOpacity
        }}>
            <div className='modal-options modal-edit'
                onClick={() => editModal()}>
                Edit
            </div>
            <div className='modal-options modal-remove'>
                Remove
            </div>
            {temptemp}
        </div>

        : null}</>;
}

