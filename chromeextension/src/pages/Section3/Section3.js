import React, { useState } from 'react';
import './Section3.css';
import Shortcut from '../../components/Shortcut/Shortcut.js'

function Section3() {

    const [display, setDisplay] = useState('flex')
    const [dummyDisplay, setDummyDisplay] = useState('flex')
    const [color, setColor] = useState('#12131A')

    function showElement() {
        setDisplay('flex')
    }

    return (
        <div className='section3-wrapper'>
            <div className='section3-container'>
                <Shortcut />
                <Shortcut />
                <Shortcut />
                <Shortcut />
                <Shortcut />
                <Shortcut />
                <Shortcut />
            </div>

            {/* <div
                style={{
                    height: '100px',
                    width: '100px',
                    backgroundColor: 'blue'
                }}>
            </div> */}



        </div>

    )
}

export default Section3