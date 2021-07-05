import React, { useState, useEffect } from 'react';
import './Section3.css';
import Shortcut from '../../components/Shortcut/Shortcut.js'
import EditModal from '../../components/EditModal/EditModal';

function Section3() {

    const [modalEditShow, setModalEditShow] = useState(false)
    const [modalOpacity, setModalOpacity] = useState('100%')

    const [shortList, setShortList] = useState([])

    let tempThis

    useEffect(() => {
        checkShortList()
    }, [])

    function checkShortList() {
        setShortList(JSON.parse(localStorage.shortcutList || '[]'))

    }
    // function displayShortcut() {
    //     tempThis = shortList.map(<div>{shortList.name} was made from the shortList</div>)
    // }




    return (
        <div className='section3-wrapper'>
            <div className='section3-container'>
                {/* <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} />
                <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} /> */}


                <EditModal modalEditShow={modalEditShow} setModalEditShow={setModalEditShow} shortList={shortList} setShortList={setShortList} />

                {shortList.map((listItem) => (
                    <Shortcut setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} key={listItem.name} listItem={listItem} />

                ))}

                <div className='section3-shortcut-container'>
                    <div className='section3-circle' onClick={() => setModalEditShow(true)}>+</div>
                </div>
            </div>
        </div>

    )
}

export default Section3