import { useState, useEffect } from 'react';
import axios from 'axios'
const CountryName = ({ country, setSelectedCountries }) => {
    const handleShow = () => {
        setSelectedCountries([country])
    }

    return (
        <div>
            {country['name'].common}
            <button onClick={handleShow}>show</button><br />
        </div>
    )
}
const ShowWeather = ({ capital }) => {
    const [currentWeather, setCurrentWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`).then(response => {
                setCurrentWeather(response.data.current)
            })
    }, [api_key, capital])

    return (
        <div>
            <h1>Weather in {capital}</h1>
            <b>temperature: {currentWeather["temperature"]} Celsius</b><br />
            <img alt="weather_icon" src={currentWeather["weather_icons"]} /><br />
            <b>wind: {currentWeather["wind_speed"]}</b>
        </div>
    )
}

const Detail = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            capital {country.capital[0]}<br />
            population {country.population}
            <h2>languages</h2>
            <ul>
                {Object.entries(country.languages).map(([code, language]) => (
                    <li key={code}>
                        {language}
                    </li>
                ))}
            </ul>
            <img alt="country's flag" src={country.flags["png"]} height='150px' width='200px' />
            <ShowWeather capital={country.capital[0]} />
        </div>
    )
}

const Countries = ({ filtersCountries, setSelectedCountries }) => {
    return (
        <div>
            {filtersCountries.length > 10 ? 'Too many matches specify another filter' : filtersCountries.length === 1 ? <Detail country={filtersCountries[0]} /> : filtersCountries.map((c, i) => <CountryName key={i} country={c} setSelectedCountries={setSelectedCountries} />)}
        </div>
    )
}

export default Countries