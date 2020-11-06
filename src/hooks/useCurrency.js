import {useState, useEffect} from 'react';
import axios from 'axios';

export const useCurrency = () => {
    const [currency, setCurrency] = useState(null);

    useEffect(() => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=CAD&symbols=USD,GBP,EUR,CAD`)
        .then(response => setCurrency(response.data.rates))
        .catch(error => console.log(error));
    }, [])

    return currency;
}