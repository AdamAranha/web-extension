import React, { useState } from 'react';
import './Shortcut.css';
import Modal from '../../components/Modal/Modal.js'

function Shortcut({ setModalEditShow, modalOpacity, listItem, modalEditShow, shortList, setShortList, shortData }) {


    const [optionsOpacity, setOptionsOpacity] = useState('0%')
    const [delay, setDelay] = useState('300ms')
    const [showModal, setShowModal] = useState('false')

    const openModal = () => {

        setShowModal(prev => !prev);
    };

    return (
        <div className='shortcut-wrapper'
            onMouseLeave={() => {
                setOptionsOpacity('0%');
            }}>

            <a href={listItem.URL}>
                <div className='shortcut-container' onMouseEnter={() => {
                    setOptionsOpacity('100%');
                    setDelay('300ms');
                }} onMouseLeave={() => {
                    // setOptionsOpacity('0%');
                    setDelay('0s');
                }} key={listItem.id}>
                    <div className='shortcut-circle'>
                        <p>{listItem.name}</p>
                    </div>
                </div>
            </a>

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
            <Modal listItem={listItem}
                showModal={showModal} setShowModal={setShowModal}
                modalEditShow={modalEditShow} setModalEditShow={setModalEditShow}
                shortList={shortList} setShortList={setShortList}
                shortData={shortData}
            />

        </div>
    )
}

export default Shortcut