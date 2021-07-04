import { useEffect, useState } from 'react';


function Weather() {

    const [weather, setWeather] = useState(null);
    const [description, setDescription] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // let isMounted = true;

        // setLoading(true);
        fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&appid=aa90ac058b495c053fe298a69ac239e2'

        )
            .then((res) => res.json())
            .then((res) => {
                setWeather(res.main.temp)
                setDescription(res.weather[0].description)
                console.log('weather out')
            })

        // return () => (isMounted = false);

    }, [])


    return { weather, description }
}

export default Weather