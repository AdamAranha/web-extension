import React, { useState, useEffect, useRef } from 'react';
import './EditModal.css';
import { v4 as uuidv4 } from 'uuid';
import HandleClick from '../HandleClick/HandeClick.js';

export default function EditModal({ modalEditShow, setModalEditShow, className, shortList, setShortList, shortData, setShortData }) {

    const [shortcutData, setShortcutData] = useState({
        name: '',
        URL: '',
        id: ''
    })


    let modalEditRef = useRef();

    useEffect(() => {
        // let somethingElse = (event) => {
        //     if (modalEditRef.current && !modalEditRef.current.contains(event.target)) {
        //         setModalEditShow(false)
        //     }
        // }
        // document.addEventListener('mousedown', somethingElse);
        // return () => {
        //     document.removeEventListener('mousedown', somethingElse)
        // }
        // console.log(shortcutData)
    }, [shortcutData]);

    function handleChange(event) {
        const { name, value } = event.target
        setShortcutData(prevInput => {
            return {
                ...prevInput,
                [name]: value,
                id: uuidv4()
            }
        })
        setShortData(shortcutData)

    }

    function handleClick(event) {
        if (event.target.name === 'confirm') {
            if (shortcutData.name && shortcutData.URL !== '') {
                const tempList = [...shortList]
                console.log("This is supposed to say", tempList)
                tempList.push(shortcutData)
                localStorage.setItem('shortcutList', JSON.stringify(tempList))
                setShortList(tempList)
                console.log(JSON.parse(localStorage.shortcutList))
            } else {
                console.log('Name/URL invalid')
            }
        } else { setModalEditShow(false) }



    }

    return <>


        {modalEditShow ?
            <div ref={modalEditRef} className={`editModal-container ` + className}>
                <form>
                    <div className='editModal-name-container editModal-form'>
                        <label>Name</label>
                        <input name='name' value={shortcutData.name} onChange={handleChange} required={true}></input>
                    </div>
                    <div className='editModal-url-container editModal-form'>
                        <label>URL</label>
                        <input name='URL' value={shortcutData.URL} onChange={handleChange} required></input>
                    </div>
                </form>

                <div className='editModal-buttonGroup'>
                    <button name='cancel' id='cancel' onClick={handleClick}>Cancel</button>
                    <button name='confirm' id='confirm' onClick={handleClick}>Confirm</button>
                </div>

            </div>
            : null}
    </>
}