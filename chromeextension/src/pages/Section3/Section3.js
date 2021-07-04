import React, { useState, useEffect } from 'react';
import './Section3.css';
import Shortcut from '../../components/Shortcut/Shortcut.js'
import EditModal from '../../components/EditModal/EditModal';

function Section3() {

    const [modalEditShow, setModalEditShow] = useState(false)
    const [modalOpacity, setModalOpacity] = useState('100%')

    useEffect(() => {

    }, [])

    return (
        <div className='section3-wrapper'>
            <div className='section3-container'>
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />


                <EditModal modalEditShow={modalEditShow} setModalEditShow={setModalEditShow} />
            </div>
        </div>

    )
}

export default Section3