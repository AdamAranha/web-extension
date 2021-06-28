import React from 'react';
import './Homepage.css';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';



function Homepage() {

    return (
        <div className='homepage-wrapper'>
            <div className='homepage-container'>
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </div>
    )
}

export default Homepage