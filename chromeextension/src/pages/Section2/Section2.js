import React, { useState, useEffect } from 'react';
import './Section2.css';
import DateObj from '../../components/DateObj/Dateobj.js';
import Weather from '../../components/Weather/Weather.js'
import { ReactComponent as YourSvg } from './Framefewclouds.svg'


function Section2() {

    const { dayOfWeek, month, date } = DateObj()
    const { loading, error, weather, description } = Weather();




    return (
        <div className='section2-container'>
            <div className='date-container'>
                <p className='date-text'>
                    {dayOfWeek},<br />{month} {date}.
                </p>
            </div>
            <div className='weather-container'>


                <p className='weather-text'>
                    <YourSvg height={200} />
                    <br />
                    <span className='weather-moretext'>{`${Math.round(weather)} °C`}</span>

                </p>
            </div>
        </div>
    )
}

export default Section2