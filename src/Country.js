import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Country.css';

function Country() {
    const [countryes, setCountryes] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountryes(response.data);
                setLoader(false);
            })
            .catch(error => {
                console.error('Error fetching data; ', error);
                setLoader(false);
            })
    }, []);

    if (loader) {
        return <div>Loading...</div>
    }

    return (
        <div className='container'>
            <h1>This is all countryes</h1>
            <div className='container'>
                {countryes.map(country => (
                    <div className='country' key={country.id}>
                        <h1>Name: {country.name.common}</h1>
                        <h2>Capital: {country.capital}</h2>
                        <p>region: {country.capital}</p>
                        <p>population: {country.population}</p>
                        <p>area: {country.area}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Country;