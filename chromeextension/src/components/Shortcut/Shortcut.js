import React, { useState } from 'react';
import './Shortcut.css';
import Modal from '../../components/Modal/Modal.js'

function Shortcut({ setModalEditShow, modalOpacity }) {


    const [optionsOpacity, setOptionsOpacity] = useState('0%')
    const [delay, setDelay] = useState('300ms')
    const [showModal, setShowModal] = useState('false')

    const openModal = () => {

        setShowModal(prev => !prev);
    };

    return (
        <div className='shortcut-wrapper' onMouseEnter={() => {
            setOptionsOpacity('100%');
            setDelay('300ms');
        }} onMouseLeave={() => {
            setOptionsOpacity('0%');
            setDelay('0s');
        }}>

            <div className='shortcut-option-div' onMouseLeave={() => {
                setDelay('0s');
            }} style={{
                opacity: optionsOpacity,
                transitionDelay: delay
            }} onClick={() => openModal()}>
                <div className='shortcut-option-circle'></div>
                <div className='shortcut-option-circle'></div>
                <div className='shortcut-option-circle'></div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} setModalEditShow={setModalEditShow} />

            <div className='shortcut-circle'>
                <p>N</p>
            </div>
        </div>
    )
}

export default Shortcut