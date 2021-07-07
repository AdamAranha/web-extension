import React, { useState, useEffect } from 'react';
import './Section3.css';
import Shortcut from '../../components/Shortcut/Shortcut.js'
import EditModal from '../../components/EditModal/EditModal';
import HandleClick from '../../components/HandleClick/HandeClick.js'

function Section3() {

    const [modalEditShow, setModalEditShow] = useState(false)
    const [modalOpacity, setModalOpacity] = useState('100%')
    const [shortData, setShortData] = useState({
        name: '',
        URL: '',
        id: ''
    })
    const [shortList, setShortList] = useState([])


    useEffect(() => {
        checkShortList()
    }, [])

    function checkShortList() {
        setShortList(JSON.parse(localStorage.shortcutList || '[]'))

    }

    function handleClick(event) {
        console.log(HandleClick(event))
        if (HandleClick(event) === 'shortcut') {
            console.log('Hellelujah')
            setModalEditShow(true)
        }
    }

    return (
        <div className='section3-wrapper'>
            <div className='section3-container'>
                {shortList.map((listItem) => (
                    <Shortcut modalEditshow={modalEditShow} setModalEditShow={setModalEditShow} modalOpacity={modalOpacity} setModalOpacity={setModalOpacity} shortList={shortList} setShortList={setShortList} key={listItem.id} listItem={listItem} shortData={shortData} />
                ))}
                <EditModal modalEditShow={modalEditShow} setModalEditShow={setModalEditShow} shortList={shortList} setShortList={setShortList} shortData={shortData} setShortData={setShortData} />
                <div className='section3-shortcut-container' name='shortcut' id='shortcut' onClick={(event) => handleClick(event)}>
                    <div className='section3-circle' name='shortcut' id='shortcut' onClick={(event) => handleClick(event)}>+</div>
                </div>
            </div>
        </div>

    )
}

export default Section3