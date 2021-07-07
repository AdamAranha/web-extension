import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';
import HandleClick from '../HandleClick/HandeClick';

export default function Modal({ showModal, setShowModal, setModalEditShow, shortList, setShortList, listItem, shortData }) {

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

    function handleClick(event) {

        if (event.target.name === 'edit') {
            setModalEditShow(prev => !prev)
            let id = listItem.id
            let index = shortList.findIndex(item => item.id === listItem.id)
            console.log(id)
            console.log(shortData)
            // shortList.splice(shortList.findIndex(item => item.id === listItem.id), 1)
        } else {

            shortList.splice(shortList.findIndex(item => item.id === listItem.id), 1)
            localStorage.setItem('shortcutList', JSON.stringify(shortList))
            setShortList(JSON.parse(localStorage.shortcutList || '[]'))
        }
    }

    return <> {!showModal ?
        <div ref={modalRef} className='modal-container' style={{
            opacity: modalOpacity
        }}>
            {/* <button className='modal-options modal-edit'
                onClick={handleClick} name='edit'>
                Edit
            </button> */}
            <button className='modal-options modal-remove' name='remove' onClick={handleClick}>
                Remove
            </button>
        </div>

        : null}</>;
}

