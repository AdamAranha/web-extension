import React, { useState, useEffect } from 'react';
import './Section3.css';
import Shortcut from '../../components/Shortcut/Shortcut.js'
import EditModal from '../../components/EditModal/EditModal';

function Section3() {

    const [modalEditShow, setModalEditShow] = useState(false)
    const [modalOpacity, setModalOpacity] = useState('100%')

    const [shortList, setShortList] = useState([])

    useEffect(() => {

    }, [])

    function checkShortList() {
        setShortList(JSON.parse(localStorage.shortList || '[]'))

        shortList.map(() => {

        })
    }

    return (
        <div className='section3-wrapper'>
            <div className='section3-container'>
                {/* <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} /> */}


                <EditModal modalEditShow={modalEditShow} setModalEditShow={setModalEditShow} />
                <div className='section3-addShortcut'>
                    <div className='section3-circle' onClick={() => setModalEditShow(true)}>+</div>
                </div>
            </div>
        </div>

    )
}

export default Section3