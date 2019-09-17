import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    }



    render() {
        return(
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
}

export default App;
