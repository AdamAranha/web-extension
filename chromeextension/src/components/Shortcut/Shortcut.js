import React, { useState } from 'react';
import './Shortcut.css';

function Shortcut() {


    const [opacity, setOpacity] = useState('0%')
    const [delay, setDelay] = useState('300ms')

    return (
        <div className='shortcut-wrapper' onMouseEnter={() => {
            setOpacity('100%')
            setDelay('300ms')
        }} onMouseLeave={() => {
            setOpacity('0%')
            setDelay('0s')
        }}>
            <div className='shortcut-option-div' onMouseLeave={() => {
                setDelay('0s')
            }} style={{
                opacity: opacity,
                transitionDelay: delay
            }}>
                <div className='shortcut-option-circle'></div>
                <div className='shortcut-option-circle'></div>
                <div className='shortcut-option-circle'></div>

            </div>
            <div className='shortcut-circle'>
                <p>N</p>
            </div>
        </div>
    )
}

export default Shortcut