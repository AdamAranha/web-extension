import React from 'react';
import './Section1.css';
import Clock from '../../components/Clock/Clock.js'

function Section1() {

    const time = Clock(new Date());



    return (
        <div className='section1-container'>
            <div className='clock'>
                <p>{time.toLocaleTimeString(
                    [], { hour: '2-digit', minute: '2-digit' }
                )}</p>
            </div>

        </div>
    )
}

export default Section1