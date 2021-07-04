import React, { useState, useEffect, useRef } from 'react';
import './EditModal.css'

export default function EditModal({ modalEditShow, setModalEditShow, className }) {

    const [shortcutData, setShortcutData] = useState({
        name: '',
        URL: ''
    })

    let modalEditRef = useRef();

    useEffect(() => {
        let somethingElse = (event) => {
            if (modalEditRef.current && !modalEditRef.current.contains(event.target)) {
                setModalEditShow(false)
            }
        }
        document.addEventListener('mousedown', somethingElse);
        return () => {
            document.removeEventListener('mousedown', somethingElse)
        }
    });

    function handleChange(event) {
        const { name, value } = event.target
        setShortcutData(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(shortcutData)
    }

    function handleClick(event) {
        console.log(event.target.name)
        setModalEditShow(false)
    }

    return <>


        {modalEditShow ?
            <div ref={modalEditRef} className={`editModal-container ` + className}>
                <form>
                    <div className='editModal-name-container editModal-form'>
                        <label>Name</label>
                        <input name='name' value={shortcutData.name} onChange={handleChange}></input>
                    </div>
                    <div className='editModal-url-container editModal-form'>
                        <label>URL</label>
                        <input name='URL' value={shortcutData.URL} onChange={handleChange}></input>
                    </div>
                </form>

                <div className='editModal-buttonGroup'>
                    <button name='cancel' onClick={handleClick}>Cancel</button>
                    <button name='confirm' onClick={handleClick}>Confirm</button>
                </div>

            </div>
            : null}
    </>
}