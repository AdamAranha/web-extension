import React from 'react';
import './Homepage.css'
import Profile from '../../components/Profile/Profile'
import Weather from '../../components/Weather/Weather'
import Tasks from '../../components/Tasks/Tasks'

function Homepage() {

    return (
        <div className='homepage-wrapper'>


            <div className='homepage-container'>
                <Profile addedClasses='shmancyCard' />
                <Weather addedClasses='shmancyCard' />
                <Tasks addedClasses='shmancyCard' />
            </div>
        </div>
    )
}

export default Homepage