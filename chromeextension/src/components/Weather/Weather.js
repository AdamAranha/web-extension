import React, { useState, useEffect } from 'react';
import './Weather.css';
import Clock from '../Clock/Clock'

function Weather(props) {


    const newClock = Clock(new Date());

    return (
        <div className={`${props.addedClasses} weather-container`}>
            <div className='flexOne clock'>
                <p className='weather-text'>{newClock.toLocaleTimeString()}</p>
            </div>

            <div className='flexOne'>
                <p className='weather-text'>Hello There</p>
            </div>
        </div>

    )
}

export default Weather