import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile(props) {

    const [greeting, setGreeting] = useState('Hi')

    useEffect(() => {
        decideGreeting()
    }, [])

    function decideGreeting() {
        setGreeting('Good Night');
        let date = new Date();
        let hours = date.getHours();
        switch (true) {
            case 0 <= hours && hours < 13:
                setGreeting('Good Morning');
                break;
            case 13 <= hours && hours < 17:
                setGreeting('Good Afternoon');
                break;
            case 17 <= hours && hours < 20:
                setGreeting('Good Evening');
                break;
            case 20 <= hours && hours <= 24:
                setGreeting('Good Night');
                break;
            default:
                setGreeting('Hello There');
                break;
        }
        console.log(date.getHours())
    }

    return (
        <div className={`${props.addedClasses} profile-container`}>
            <p className='profile-text'>{`${greeting},\nAdam`}</p>
        </div>
    )
}

export default Profile