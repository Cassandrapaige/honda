import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../base";

export const useCurrency = () => {
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=USD,GBP,EUR,CAD`
      )
      .then((response) => setCurrency(response.data.rates))
      .catch((error) => console.log(error));
  }, []);

  return currency;
};
