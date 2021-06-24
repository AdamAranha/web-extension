import React, { useState, useEffect } from 'react';


function Clock(currentDate) {

    const [date, setDate] = useState(currentDate)

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID)
        };
    }, []);

    function tick() {
        setDate(new Date());
    }
    return date;
}

export default Clock